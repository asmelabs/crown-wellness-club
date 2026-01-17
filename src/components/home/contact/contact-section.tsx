import { getSettings } from "@/lib/get-settings";
import { type LocalizedValue, resolveLocalizedValue } from "@/lib/utils";
import { ContactCardsList } from "./contact-cards-list";
import { ContactFormWrapper } from "./contact-form-wrapper";
import { ContactHeader } from "./contact-header";
import { EmbedMap } from "./embed-map";
import type { ContactCardType } from "./types";

interface ContactSectionProps {
	title?: LocalizedValue;
	subtitle?: LocalizedValue;
}

export async function ContactSection({ title, subtitle }: ContactSectionProps) {
	const { mapEmbed, address, phone, email, workingHours } = await getSettings();

	console.log(mapEmbed);

	const mainWorkingHours =
		workingHours?.length && workingHours[0]
			? {
					hours: workingHours[0].hours || "",
					days: resolveLocalizedValue(workingHours[0].days),
				}
			: null;

	const contactCards: ContactCardType[] = [
		{
			icon: "phone",
			title: "Phone",
			value: phone || "",
		},
		{
			icon: "mail",
			title: "Email",
			value: email || "",
		},
		{
			icon: "clock",
			title: "Operating Hours",
			value: mainWorkingHours
				? `${mainWorkingHours.days} • ${mainWorkingHours.hours}`
				: "",
		},
		{
			icon: "map-pin",
			title: "Address",
			value: address || "",
		},
	].filter((card) => card.value);

	return (
		<section id="contact" className="py-16 md:py-24">
			<div className="mx-auto max-w-7xl px-4">
				<ContactHeader title={title} subtitle={subtitle} />

				<div className="mt-12 grid gap-8 lg:grid-cols-[1.1fr_1fr]">
					<div className="space-y-6">
						<ContactCardsList cards={contactCards} />

						<EmbedMap src={mapEmbed} />
					</div>

					<ContactFormWrapper />
				</div>
			</div>
		</section>
	);
}
