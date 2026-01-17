import { SanityStatCard } from "@/components/sanity-stat-card";
import type { HOME_PAGE_QUERYResult } from "@/sanity/types";

interface CommunityStatItemProps {
  stat: NonNullable<
    NonNullable<HOME_PAGE_QUERYResult>["communityStatsList"]
  >[number];
}

export function CommunityStatItem({ stat }: CommunityStatItemProps) {
  return (
    <SanityStatCard
      className="h-full"
      contentClassName="flex flex-col items-center gap-3 text-center"
      iconContainerClassName="flex size-12 items-center justify-center rounded-full border border-border/60 bg-muted/40"
      iconClassName="size-6 text-primary"
      valueContainerClassName="text-2xl font-semibold text-foreground"
      labelClassName="text-sm text-muted-foreground"
      statCard={stat}
    />
  );
}
