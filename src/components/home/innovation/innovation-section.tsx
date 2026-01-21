import { getTranslations } from "next-intl/server";
import type { LocalizedValue } from "@/lib/utils";
import type { HOME_PAGE_QUERYResult } from "@/sanity/types";
import { InnovationBanner } from "./innovation-banner";
import { InnovationHeader } from "./innovation-header";
import { InnovationItemsList } from "./innovation-items-list";
import { InnovationStats } from "./innovation-stats";

interface InnovationSectionProps {
	title?: LocalizedValue;
	subtitle?: LocalizedValue;
	items?: NonNullable<HOME_PAGE_QUERYResult>["innovationList"] | null;
	stats?: NonNullable<HOME_PAGE_QUERYResult>["innovationStatsList"] | null;
	banner?: NonNullable<HOME_PAGE_QUERYResult>["innovationBanner"] | null;
}

export async function InnovationSection({
	title,
	subtitle,
	items = [],
	stats = [],
	banner,
}: InnovationSectionProps) {
	const t = await getTranslations("home.innovation");

	const hasStats = stats && stats.length > 0;
	const hasItems = items && items.length > 0;

	return (
		<section id="innovation" className="py-16 md:py-24">
			<div className="mx-auto max-w-7xl px-4">
				<InnovationHeader title={title} subtitle={subtitle} />
				{hasStats ? (
					<InnovationStats stats={stats} />
				) : (
					<p className="mx-auto mt-12 max-w-2xl text-center text-sm text-muted-foreground md:text-base">
						{t("empty-stats")}
					</p>
				)}
				{hasItems ? (
					<InnovationItemsList items={items} />
				) : (
					<p className="mx-auto mt-12 max-w-2xl text-center text-sm text-muted-foreground md:text-base">
						{t("empty-items")}
					</p>
				)}
				{banner ? (
					<InnovationBanner
						title={banner.title}
						description={banner.description}
					/>
				) : null}
			</div>
		</section>
	);
}
