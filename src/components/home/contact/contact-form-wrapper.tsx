import { getTranslations } from "next-intl/server";
import { Suspense } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { ContactForm } from "./contact-form";

export async function ContactFormWrapper() {
	const t = await getTranslations("contact");

	return (
		<Card className="h-full">
			<CardContent className="space-y-6">
				<div>
					<h3 className="text-2xl font-semibold">Send Us a Message</h3>
					<p className="text-sm text-muted-foreground">
						We&apos;ll get back to you within 24 hours.
					</p>
				</div>
				<Suspense>
					<ContactForm />
				</Suspense>
				<p className="text-xs text-muted-foreground">{t("privacy-policy")}</p>
			</CardContent>
		</Card>
	);
}
