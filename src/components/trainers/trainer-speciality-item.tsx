import type { TrainerSpecialitiesQueryResult } from "@/sanity/types";
import { SanityIcon } from "../sanity-icon";

interface TrainerSpecialityItemProps {
	speciality: NonNullable<NonNullable<TrainerSpecialitiesQueryResult>[number]>;
}

export function TrainerSpecialityItem({
	speciality,
}: TrainerSpecialityItemProps) {
	return (
		<div
			className={
				"group flex items-start gap-4 rounded-2xl border border-border/60 bg-background/80 p-4 transition hover:border-primary/40 hover:bg-muted/40"
			}
		>
			<div
				className={
					"flex size-12 items-center justify-center rounded-xl border border-border/60 bg-muted/40 text-primary"
				}
			>
				<SanityIcon icon={speciality.icon || "user"} className="size-5" />
			</div>

			<div className="min-w-0">
				<p className="font-semibold text-foreground text-sm">
					{speciality.name}
				</p>
				{speciality.description ? (
					<p className="mt-1 text-muted-foreground text-xs">
						{speciality.description}
					</p>
				) : null}
			</div>
		</div>
	);
}
