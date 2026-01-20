import { Banner } from "@/components/banner";
import { LogoIcon } from "@/components/brand/logo";
import type { LocalizedValue } from "@/lib/utils";

interface ScaleBannerProps {
	title?: LocalizedValue;
	subtitle?: LocalizedValue;
	description?: LocalizedValue;
}

export function ScaleBanner({
	title,
	subtitle,
	description,
}: ScaleBannerProps) {
	return (
		<Banner
			header={<LogoIcon className="size-20 text-primary" />}
			title={title}
			titleProps={{ enablePaintedText: true }}
			subtitle={subtitle}
			description={description}
			titleClassName="text-4xl md:text-5xl"
			subtitleClassName="text-primary text-sm uppercase tracking-[0.3em]"
			descriptionClassName="text-muted-foreground max-w-3xl"
		/>
	);
}
