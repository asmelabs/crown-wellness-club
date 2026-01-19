import type { TrainersPageQueryResult } from "@/sanity/types";
import { SanityStatCard } from "../sanity-stat-card";

interface TrainersStatItemProps {
	stat: NonNullable<NonNullable<TrainersPageQueryResult>["stats"]>[number];
}

export function TrainersStatItem({ stat }: TrainersStatItemProps) {
	return (
		<SanityStatCard
			statCard={stat}
			className="border-border/60 bg-background/70 shadow-sm backdrop-blur h-full"
			contentClassName="gap-2 py-6"
			iconContainerClassName="flex size-12 items-center justify-center rounded-full border border-border/60 bg-muted/40"
			iconClassName="size-6 text-primary"
			valueContainerClassName="text-3xl font-semibold text-foreground"
			valueClassName="leading-none"
			labelClassName="text-sm text-muted-foreground"
		/>
	);
}
