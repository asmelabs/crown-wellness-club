import { EventBanner } from "./event-banner";
import { EventHeader } from "./event-header";
import { EventItemsList } from "./event-items-lits";
import type { EventItemType } from "./types";

interface EventsSectionProps {
  title?: string;
  subtitle?: string;
  items?: EventItemType[];
  bannerTitle?: string;
  bannerDescription?: string;
  bannerButtonText?: string;
}

export function EventsSection({
  title,
  subtitle,
  items = [],
  bannerTitle,
  bannerDescription,
  bannerButtonText,
}: EventsSectionProps) {
  const hasItems = items.length > 0;
  const hasBanner = Boolean(
    bannerTitle || bannerDescription || bannerButtonText,
  );

  return (
    <section id="events" className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <EventHeader title={title} subtitle={subtitle} />
        {hasItems ? (
          <EventItemsList items={items} />
        ) : (
          <p className="mx-auto mt-12 max-w-2xl text-center text-sm text-muted-foreground md:text-base">
            No events are available right now. Please check back soon.
          </p>
        )}
        {hasBanner ? (
          <EventBanner
            title={bannerTitle}
            description={bannerDescription}
            buttonText={bannerButtonText}
          />
        ) : null}
      </div>
    </section>
  );
}
