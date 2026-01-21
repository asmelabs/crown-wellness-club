"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { MailIcon, UserIcon } from "lucide-react";
import { useTranslations } from "next-intl";
import { parseAsString, useQueryState } from "nuqs";
import { useMemo } from "react";
import { useForm } from "react-hook-form";
import z from "zod";
import { submitContactForm } from "@/actions/submit-contact-form";
import { CTAButton } from "@/components/cta-button";
import { Field, FieldError, FieldLabel } from "@/components/ui/field";
import {
	InputGroup,
	InputGroupAddon,
	InputGroupInput,
	InputGroupTextarea,
} from "@/components/ui/input-group";
import { Spinner } from "@/components/ui/spinner";
import { toastManager } from "@/components/ui/toast";
import { CONTACT_FORM_VALIDATION_LIMITS } from "@/lib/data";

export function ContactForm() {
	const t = useTranslations("contact");

	const formSchema = useMemo(() => {
		return z.object({
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
	}, [t]);

	const [defaultEmail] = useQueryState(
		"contact-email",
		parseAsString.withDefault(""),
	);
	const [defaultMessage] = useQueryState(
		"contact-message",
		parseAsString.withDefault(""),
	);
	const [defaultName] = useQueryState(
		"contact-name",
		parseAsString.withDefault(""),
	);

	const form = useForm({
		resolver: zodResolver(formSchema),
		defaultValues: {
			name: defaultName,
			email: defaultEmail,
			message: defaultMessage,
		},
	});

	const onSubmit = form.handleSubmit(async (data) => {
		const result = await submitContactForm(data);

		if (!result.ok) {
			toastManager.add({
				title: t("form-error"),
				description: result.message,
				type: "error",
			});

			return;
		}

		toastManager.add({ title: t("form-success"), type: "success" });

		form.reset({
			name: "",
			email: "",
			message: "",
		});
	});

	return (
		<form className="space-y-4" onSubmit={onSubmit}>
			<Field>
				<FieldLabel>{t("fields.name.label")}</FieldLabel>
				<InputGroup>
					<InputGroupInput
						{...form.register("name")}
						placeholder={t("fields.name.placeholder")}
						aria-label={t("fields.name.aria-label")}
					/>
					<InputGroupAddon>
						<UserIcon />
					</InputGroupAddon>
				</InputGroup>
				{form.formState.errors.name && (
					<FieldError>{form.formState.errors.name?.message}</FieldError>
				)}
			</Field>
			<Field>
				<FieldLabel>{t("fields.email.label")}</FieldLabel>
				<InputGroup>
					<InputGroupInput
						{...form.register("email")}
						placeholder={t("fields.email.placeholder")}
						aria-label={t("fields.email.aria-label")}
					/>
					<InputGroupAddon>
						<MailIcon />
					</InputGroupAddon>
				</InputGroup>
				{form.formState.errors.email && (
					<FieldError>{form.formState.errors.email?.message}</FieldError>
				)}
			</Field>
			<Field>
				<FieldLabel>{t("fields.message.label")}</FieldLabel>
				<InputGroup>
					<InputGroupTextarea
						maxLength={CONTACT_FORM_VALIDATION_LIMITS.message.max}
						placeholder={t("fields.message.placeholder")}
						aria-label={t("fields.message.aria-label")}
						{...form.register("message")}
					/>
				</InputGroup>
				{form.formState.errors.message && (
					<FieldError>{form.formState.errors.message?.message}</FieldError>
				)}
			</Field>
			<CTAButton
				className="w-full"
				containerClassName="w-full"
				type="submit"
				disabled={form.formState.isSubmitting}
			>
				{form.formState.isSubmitting ? <Spinner /> : t("submit")}
			</CTAButton>
		</form>
	);
}
