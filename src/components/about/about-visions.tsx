import { LocalizedText } from "@/components/localized-text";
import type { LocalizedValue } from "@/lib/utils";
import type { AboutPageQueryResult } from "@/sanity/types";
import { AboutVisionItem } from "./about-vision-item";

interface AboutVisionsProps {
	title: LocalizedValue;
	description: LocalizedValue;
	visions: NonNullable<AboutPageQueryResult>["visionList"];
}

export function AboutVisions({
	title,
	description,
	visions,
}: AboutVisionsProps) {
	if (!visions || visions.length === 0) return null;

	return (
		<div className="space-y-10">
			<div className="mx-auto flex max-w-3xl flex-col items-center gap-4 text-center">
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

			<div className="grid gap-6 md:grid-cols-2">
				{visions.map((vision, index) => (
					<AboutVisionItem key={vision._key} vision={vision} index={index} />
				))}
			</div>
		</div>
	);
}
