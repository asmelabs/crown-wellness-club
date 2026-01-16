import { CommunityHeader } from "./community-header";
import { CommunityItemsList } from "./community-items-list";
import { CommunityStatsList } from "./community-stats-list";
import type { CommunityItemType, CommunityStat } from "./types";

interface CommunitySectionProps {
  title?: string;
  subtitle?: string;
  items?: CommunityItemType[];
  stats?: CommunityStat[];
}

export function CommunitySection({
  title,
  subtitle,
  items = [],
  stats = [],
}: CommunitySectionProps) {
  const hasStats = stats.length > 0;
  const hasItems = items.length > 0;

  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <CommunityHeader title={title} subtitle={subtitle} />

        {hasStats ? (
          <CommunityStatsList stats={stats} />
        ) : (
          <p className="mx-auto mt-12 max-w-2xl text-center text-sm text-muted-foreground md:text-base">
            No community stats are available right now. Please check back soon.
          </p>
        )}

        {hasItems ? (
          <CommunityItemsList items={items} />
        ) : (
          <p className="mx-auto mt-12 max-w-2xl text-center text-sm text-muted-foreground md:text-base">
            No community highlights are available right now. Please check back
            soon.
          </p>
        )}
      </div>
    </section>
  );
}
