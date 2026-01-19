import type { TrainersPageQueryResult } from "@/sanity/types";
import { TrainersStatItem } from "./trainers-stat-item";

interface TrainersStatsProps {
	stats: NonNullable<TrainersPageQueryResult>["stats"];
}

export function TrainersStats({ stats }: TrainersStatsProps) {
	if (!stats || stats.length === 0) return null;

	return (
		<div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
			{stats.map((stat) => (
				<TrainersStatItem key={stat._key} stat={stat} />
			))}
		</div>
	);
}
