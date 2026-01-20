import { LocalizedText } from "@/components/localized-text";
import { SanityIcon } from "@/components/sanity-icon";
import type { LocalizedValue } from "@/lib/utils";
import type { AboutPageQueryResult, Icon } from "@/sanity/types";
import { AboutStatItem } from "./about-stat-item";

interface AboutStatsProps {
	title: LocalizedValue;
	description: LocalizedValue;
	icon: Icon | null;
	stats: NonNullable<AboutPageQueryResult>["statsList"];
}

export function AboutStats({
	title,
	description,
	icon,
	stats,
}: AboutStatsProps) {
	if (!stats || stats.length === 0) return null;

	return (
		<div className="space-y-10">
			<div className="mx-auto flex max-w-3xl flex-col items-center gap-4 text-center">
				<div className="flex size-12 items-center justify-center rounded-full border border-border/60 bg-background/80 shadow-sm">
					<SanityIcon
						icon={icon || "chart-bar"}
						className="size-6 text-primary"
					/>
				</div>

				<div className="space-y-2">
					<h2 className="font-semibold text-2xl tracking-tight sm:text-3xl">
						<LocalizedText text={title} enablePaintedText />
					</h2>
					<LocalizedText
						text={description}
						className="text-muted-foreground text-sm sm:text-base"
					/>
				</div>
			</div>

			<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
				{stats.map((stat) => (
					<AboutStatItem key={stat._key} stat={stat} />
				))}
			</div>
		</div>
	);
}
