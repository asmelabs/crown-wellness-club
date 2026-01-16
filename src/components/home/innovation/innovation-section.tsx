import { InnovationBanner } from "./innovation-banner";
import { InnovationHeader } from "./innovation-header";
import { InnovationItemsList } from "./innovation-items-list";
import { InnovationStats } from "./innovation-stats";
import type { InnovationItemType, InnovationStatType } from "./types";

interface InnovationSectionProps {
  title?: string;
  subtitle?: string;
  items?: InnovationItemType[];
  stats?: InnovationStatType[];
  bannerTitle?: string;
  bannerDescription?: string;
}

export function InnovationSection({
  title,
  subtitle,
  items = [],
  stats = [],
  bannerTitle,
  bannerDescription,
}: InnovationSectionProps) {
  const hasStats = stats.length > 0;
  const hasItems = items.length > 0;
  const hasBanner = Boolean(bannerTitle || bannerDescription);

  return (
    <section id="innovation" className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <InnovationHeader title={title} subtitle={subtitle} />
        {hasStats ? (
          <InnovationStats stats={stats} />
        ) : (
          <p className="mx-auto mt-12 max-w-2xl text-center text-sm text-muted-foreground md:text-base">
            No innovation stats are available right now. Please check back soon.
          </p>
        )}
        {hasItems ? (
          <InnovationItemsList items={items} />
        ) : (
          <p className="mx-auto mt-12 max-w-2xl text-center text-sm text-muted-foreground md:text-base">
            No innovation highlights are available right now. Please check back
            soon.
          </p>
        )}
        {hasBanner ? (
          <InnovationBanner
            title={bannerTitle}
            description={bannerDescription}
          />
        ) : null}
      </div>
    </section>
  );
}
