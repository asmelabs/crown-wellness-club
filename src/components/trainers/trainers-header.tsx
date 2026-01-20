import type { LocalizedValue } from "@/lib/utils";
import type { Icon, TrainersPageQueryResult } from "@/sanity/types";
import { LocalizedText } from "../localized-text";
import { SanityIcon } from "../sanity-icon";
import { TrainersStats } from "./trainers-stats";

interface TrainersHeaderProps {
	title: LocalizedValue;
	subtitle: LocalizedValue;
	icon: Icon | null;
	stats: NonNullable<TrainersPageQueryResult>["stats"];
}

export function TrainersHeader({
	title,
	subtitle,
	icon,
	stats,
}: TrainersHeaderProps) {
	return (
		<section id="gallery-header" className="relative isolate overflow-hidden">
			<div className="absolute inset-0 bg-linear-to-b from-background via-background/90 to-muted/20" />
			<div className="absolute -top-32 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />

			<div className="relative z-10 mx-auto flex min-h-[70vh] max-w-5xl flex-col items-center justify-center gap-10 px-6 py-16 text-center sm:py-20 lg:py-24">
				<div className="flex size-14 items-center justify-center rounded-full border border-border/60 bg-background/70 shadow-sm">
					<SanityIcon icon={icon || "users"} className="size-7 text-primary" />
				</div>

				<div className="space-y-4">
					<h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
						<LocalizedText text={title} enablePaintedText />
					</h1>

					<LocalizedText
						text={subtitle}
						className="mx-auto max-w-3xl text-base text-muted-foreground sm:text-lg"
					/>
				</div>

				<div className="w-full max-w-5xl">
					<TrainersStats stats={stats} />
				</div>
			</div>
		</section>
	);
}
