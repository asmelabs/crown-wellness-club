import type { LocalizedValue } from "@/lib/utils";
import type { Icon } from "@/sanity/types";
import { LocalizedText } from "../localized-text";
import { SanityIcon } from "../sanity-icon";

interface TrainersSpecialitiesProps {
	title: LocalizedValue;
	subtitle: LocalizedValue;
	icon: Icon | null;
}

export function TrainersSpecialities({
	title,
	subtitle,
	icon,
}: TrainersSpecialitiesProps) {
	return (
		<div className="mx-auto flex max-w-3xl flex-col items-center gap-4 text-center">
			<div className="flex size-12 items-center justify-center rounded-full border border-border/60 bg-background/80 shadow-sm">
				<SanityIcon icon={icon || "grid"} className="size-6 text-primary" />
			</div>

			<div className="space-y-2">
				<h2 className="font-semibold text-2xl tracking-tight sm:text-3xl">
					<LocalizedText text={title} enablePaintedText />
				</h2>
				<LocalizedText
					text={subtitle}
					className="text-muted-foreground text-sm sm:text-base"
				/>
			</div>
		</div>
	);
}
