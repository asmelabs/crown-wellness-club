import type { LocalizedValue } from "@/lib/utils";
import type { HOME_PAGE_QUERYResult } from "@/sanity/types";
import { ScaleBanner } from "./scale-banner";
import { ScaleGrid } from "./scale-grid";
import { ScaleHeader } from "./scale-header";

interface ScaleSectionProps {
	title?: LocalizedValue;
	subtitle?: LocalizedValue;
	items?: NonNullable<HOME_PAGE_QUERYResult>["scaleList"] | null;
	banner?: NonNullable<HOME_PAGE_QUERYResult>["scaleBanner"] | null;
	emptyMessage?: string;
}

export function ScaleSection({
	title,
	subtitle,
	items = [],
	banner,
	emptyMessage = "No scale highlights are available right now. Please check back soon.",
}: ScaleSectionProps) {
	return (
		<section id="impressive-scale" className="py-16 md:py-24">
			<div className="mx-auto max-w-7xl px-4">
				<ScaleHeader title={title} subtitle={subtitle} />
				<div className="mt-12 space-y-8">
					{items && items.length > 0 ? (
						<ScaleGrid items={items} />
					) : (
						<p className="mx-auto max-w-2xl text-center text-sm text-muted-foreground md:text-base">
							{emptyMessage}
						</p>
					)}
					{banner ? (
						<ScaleBanner
							title={banner.title}
							subtitle={banner.subtitle}
							description={banner.description}
						/>
					) : null}
				</div>
			</div>
		</section>
	);
}
