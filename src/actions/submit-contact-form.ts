"use server";

import DOMPurify from "isomorphic-dompurify";
import { getTranslations } from "next-intl/server";
import z from "zod";
import { CONTACT_FORM_VALIDATION_LIMITS } from "@/lib/data";
import { getClientIp } from "@/lib/get-client-ip";
import { contactFormRatelimit } from "@/lib/rate-limit";
import { writeClient } from "@/sanity/lib/write-client";

interface SubmitContactFormInput {
	name: string;
	email: string;
	message: string;
}

type SubmitContactFormResult =
	| {
			ok: true;
	  }
	| {
			ok: false;
			message: string;
	  };

export async function submitContactForm(
	input: SubmitContactFormInput,
): Promise<SubmitContactFormResult> {
	const t = await getTranslations("contact");
	const ip = await getClientIp();

	try {
		const { success } = await contactFormRatelimit.limit(ip);

		if (!success) {
			return {
				ok: false,
				message: t("rate-limit-exceeded"),
			};
		}
	} catch (error) {
		console.error("Error submitting contact form:", error);
		// Continue with the submission, to not block legitimate submissions
	}

	const formSchema = z.object({
		name: z
			.string({ error: t("validation.name.invalid") })
			.nonempty({ error: t("validation.name.required") })
			.max(CONTACT_FORM_VALIDATION_LIMITS.name.max, {
				error: t("validation.name.maxLength", {
					maxLength: CONTACT_FORM_VALIDATION_LIMITS.name.max,
				}),
			}),
		email: z
			.email({ error: t("validation.email.invalid") })
			.max(CONTACT_FORM_VALIDATION_LIMITS.email.max, {
				error: t("validation.email.maxLength", {
					maxLength: CONTACT_FORM_VALIDATION_LIMITS.email.max,
				}),
			}),
		message: z
			.string({ error: t("validation.message.invalid") })
			.nonempty({ error: t("validation.message.required") })
			.max(CONTACT_FORM_VALIDATION_LIMITS.message.max, {
				error: t("validation.message.maxLength", {
					maxLength: CONTACT_FORM_VALIDATION_LIMITS.message.max,
				}),
			}),
	});

	const parsed = formSchema.safeParse(input);

	if (!parsed.success) {
		return {
			ok: false,
			message: parsed.error.issues[0]?.message || t("validation.common.error"),
		};
	}

	// purify the message
	const purifiedMessage = DOMPurify.sanitize(parsed.data.message);

	const { name, email } = parsed.data;

	try {
		await writeClient.create({
			_type: "contactFormSubmission",
			name,
			email,
			message: purifiedMessage,
			submittedAt: new Date().toISOString(),
			status: "new",
		});

		return { ok: true };
	} catch (error) {
		console.error("Error submitting contact form:", error);

		return {
			ok: false,
			message: t("form-error"),
		};
	}
}
