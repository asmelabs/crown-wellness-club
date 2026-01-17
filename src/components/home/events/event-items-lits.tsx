import { getLocale } from "next-intl/server";
import { sanityFetch } from "@/sanity/lib/client";
import { EVENTS_QUERY } from "@/sanity/queries/events-query";
import type { EVENTS_QUERYResult } from "@/sanity/types";
import { EventCard } from "./event-card";

interface EventItemsListProps {
	emptyMessage?: string;
}

export async function EventItemsList({
	emptyMessage = "No events are available right now. Please check back soon.",
}: EventItemsListProps) {
	const locale = await getLocale();
	const eventsData = await sanityFetch<EVENTS_QUERYResult>({
		query: EVENTS_QUERY,
		params: { locale },
	});

	if (!eventsData || eventsData.length === 0) {
		return (
			<p className="mx-auto max-w-2xl text-center text-sm text-muted-foreground md:text-base">
				{emptyMessage}
			</p>
		);
	}

	return (
		<div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
			{eventsData.map((event) => (
				<EventCard key={event.slug?.current} event={event} />
			))}
		</div>
	);
}
