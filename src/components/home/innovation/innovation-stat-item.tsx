import { SanityStatCard } from "@/components/sanity-stat-card";
import type { HOME_PAGE_QUERYResult } from "@/sanity/types";

interface InnovationStatItemProps {
	stat: NonNullable<
		NonNullable<HOME_PAGE_QUERYResult>["innovationStatsList"]
	>[number];
}

export function InnovationStatItem({ stat }: InnovationStatItemProps) {
	return (
		<SanityStatCard
			statCard={stat}
			className="h-full"
			iconClassName="size-12 -mt-3 text-primary"
			valueContainerClassName="text-2xl font-semibold text-foreground"
			labelClassName="text-sm text-muted-foreground"
		/>
	);
}
