import type { LocalizedValue } from "@/lib/utils";
import type { HOME_PAGE_QUERYResult } from "@/sanity/types";
import { EventBanner } from "./event-banner";
import { EventHeader } from "./event-header";
import { EventItemsList } from "./event-items-lits";

interface EventsSectionProps {
	title?: LocalizedValue;
	subtitle?: LocalizedValue;
	banner?: NonNullable<HOME_PAGE_QUERYResult>["eventsBanner"] | null;
	locale: string;
}

export function EventsSection({
	title,
	subtitle,
	banner,
	locale,
}: EventsSectionProps) {
	const hasBanner = Boolean(banner);

	return (
		<section id="events" className="py-16 md:py-24">
			<div className="mx-auto max-w-7xl px-4">
				<EventHeader title={title} subtitle={subtitle} />
				<EventItemsList locale={locale} />
				{hasBanner ? (
					<EventBanner
						title={banner?.title}
						description={banner?.description}
						buttonText={banner?.buttons?.[0]?.text}
					/>
				) : null}
			</div>
		</section>
	);
}
