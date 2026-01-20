import { Banner } from "@/components/banner";
import { CTAButton } from "@/components/cta-button";
import { LocalizedText } from "@/components/localized-text";
import type { LocalizedValue } from "@/lib/utils";

interface EventBannerProps {
	title?: LocalizedValue;
	description?: LocalizedValue;
	buttonText?: LocalizedValue;
}

export function EventBanner({
	title,
	description,
	buttonText,
}: EventBannerProps) {
	const ctaLabel = buttonText ?? "Join Community";

	return (
		<Banner
			title={title}
			description={description}
			footer={
				<CTAButton>
					<LocalizedText text={ctaLabel} />
				</CTAButton>
			}
			titleClassName="text-4xl md:text-5xl"
			descriptionClassName="text-muted-foreground max-w-3xl"
			cardClassName="mt-12"
		/>
	);
}
