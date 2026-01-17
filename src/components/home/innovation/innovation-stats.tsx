import type { HOME_PAGE_QUERYResult } from "@/sanity/types";
import { InnovationStatItem } from "./innovation-stat-item";

interface InnovationStatsProps {
  stats: NonNullable<NonNullable<HOME_PAGE_QUERYResult>["innovationStatsList"]>;
}

export function InnovationStats({ stats }: InnovationStatsProps) {
  return (
    <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <InnovationStatItem key={stat._key} stat={stat} />
      ))}
    </div>
  );
}
