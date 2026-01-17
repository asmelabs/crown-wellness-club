import type { GalleryPageQueryResult } from "@/sanity/types";
import { SanityStatCard } from "../sanity-stat-card";

interface GalleryStatItemProps {
	stat: NonNullable<NonNullable<GalleryPageQueryResult>["stats"]>[number];
}

export function GalleryStatItem({ stat }: GalleryStatItemProps) {
	return (
		<SanityStatCard
			statCard={stat}
			className="h-full border-border/60 bg-background/70 shadow-sm backdrop-blur"
			contentClassName="gap-2 py-6"
			iconContainerClassName="flex size-12 items-center justify-center rounded-full border border-border/60 bg-muted/40"
			iconClassName="size-6 text-primary"
			valueContainerClassName="text-3xl font-semibold text-foreground"
			valueClassName="leading-none"
			labelClassName="text-sm text-muted-foreground"
		/>
	);
}
