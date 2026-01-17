import type { GalleryPageQueryResult } from "@/sanity/types";
import { GalleryStatItem } from "./gallery-stat-item";

interface GalleryStatsProps {
	stats: NonNullable<GalleryPageQueryResult>["stats"];
}

export function GalleryStats({ stats }: GalleryStatsProps) {
	if (!stats || stats.length === 0) return null;

	return (
		<div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
			{stats.map((stat) => (
				<GalleryStatItem key={stat._key} stat={stat} />
			))}
		</div>
	);
}
