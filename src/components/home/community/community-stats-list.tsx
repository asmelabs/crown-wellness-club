import type { HOME_PAGE_QUERYResult } from "@/sanity/types";
import { CommunityStatItem } from "./community-stat-item";

interface CommunityStatsListProps {
	stats: NonNullable<NonNullable<HOME_PAGE_QUERYResult>["communityStatsList"]>;
}

export function CommunityStatsList({ stats }: CommunityStatsListProps) {
	return (
		<div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
			{stats.map((stat) => (
				<CommunityStatItem key={stat._key} stat={stat} />
			))}
		</div>
	);
}
