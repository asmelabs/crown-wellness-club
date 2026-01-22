import Image from "next/image";
import { getImgUrl } from "@/lib/get-img-url";
import { type LocalizedValue, resolveLocalizedValue } from "@/lib/utils";
import type { Button, Banner as SanityBannerType } from "@/sanity/types";
import { Banner } from "./banner";
import { SanityButton } from "./sanity-button";

interface SanityBannerProps {
	banner?:
		| (Omit<
				SanityBannerType,
				| "_type"
				| "title"
				| "subtitle"
				| "_id"
				| "_createdAt"
				| "_updatedAt"
				| "_rev"
				| "buttons"
		  > & {
				title?: LocalizedValue;
				subtitle?: LocalizedValue;
				description?: LocalizedValue;
				buttons?: Array<Button>;
		  })
		| null;
	bannerProps?: Omit<
		React.ComponentProps<typeof Banner>,
		"title" | "subtitle" | "description" | "header" | "footer"
	>;
}

export function SanityBanner({ banner, bannerProps }: SanityBannerProps) {
	if (!banner) return null;

	const { title, subtitle, description, image, buttons } = banner;

	const titleContent = title ? resolveLocalizedValue(title) : "";
	const subtitleContent = subtitle ? resolveLocalizedValue(subtitle) : "";
	const descriptionContent = description
		? resolveLocalizedValue(description)
		: "";
	const imageAlt = titleContent ?? subtitleContent ?? "Banner Image";
	const imageUrl = getImgUrl(image);
	const header = imageUrl ? (
		<Image src={imageUrl} alt={imageAlt} width={1000} height={1000} />
	) : null;

	const footer =
		buttons && buttons.length > 0 ? (
			<div className="flex justify-center gap-2">
				{buttons.map((button) => (
					<SanityButton key={titleContent} button={button} />
				))}
			</div>
		) : null;

	return (
		<Banner
			header={header}
			title={titleContent}
			subtitle={subtitleContent}
			description={descriptionContent}
			footer={footer}
			{...bannerProps}
		/>
	);
}
