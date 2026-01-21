"use server";

import { getTranslations } from "next-intl/server";
import z from "zod";
import { CONTACT_FORM_VALIDATION_LIMITS } from "@/lib/data";
import { writeClient } from "@/sanity/lib/write-client";

export async function submitContactForm(input: {
	name: string;
	email: string;
	message: string;
}): Promise<
	| {
			ok: true;
	  }
	| {
			ok: false;
			message: string;
	  }
> {
	const t = await getTranslations("contact");

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

	const { name, email, message } = parsed.data;

	await writeClient.create({
		_type: "contactFormSubmission",
		name,
		email,
		message,
		submittedAt: new Date().toISOString(),
		status: "new",
	});

	return { ok: true };
}
