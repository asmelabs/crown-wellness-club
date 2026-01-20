import { LocalizedText } from "@/components/localized-text";
import { SanityIcon } from "@/components/sanity-icon";
import { Card, CardContent } from "@/components/ui/card";
import type { AboutPageQueryResult } from "@/sanity/types";

interface AboutVisionItemProps {
	vision: NonNullable<NonNullable<AboutPageQueryResult>["visionList"]>[number];
	index: number;
}

export function AboutVisionItem({ vision, index }: AboutVisionItemProps) {
	const primaryColor = vision.primaryColor?.value ?? "#0f766e";
	const stepNumber = index + 1;

	return (
		<Card className="group relative h-full overflow-hidden border-border/60 bg-background/80">
			<div
				className="pointer-events-none absolute inset-y-0 left-0 w-1 opacity-80"
				style={{ backgroundColor: primaryColor }}
			/>
			<CardContent className="relative z-10 flex h-full flex-col gap-4">
				<div className="flex items-center justify-between">
					<div className="flex items-center gap-3">
						<div
							className="flex size-12 items-center justify-center rounded-2xl text-white shadow-sm"
							style={{ backgroundColor: primaryColor }}
						>
							<SanityIcon icon={vision.icon || "target"} className="size-6" />
						</div>
						<div>
							<p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
								Vision {String(stepNumber).padStart(2, "0")}
							</p>
							<h3 className="text-lg font-semibold">
								<LocalizedText text={vision.title} />
							</h3>
						</div>
					</div>
				</div>

				{vision.subtitle ? (
					<p className="text-sm text-primary">
						<LocalizedText text={vision.subtitle} />
					</p>
				) : null}

				{vision.description ? (
					<p className="text-sm text-muted-foreground">
						<LocalizedText text={vision.description} />
					</p>
				) : null}
			</CardContent>
		</Card>
	);
}
