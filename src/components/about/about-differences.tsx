import { LocalizedText } from "@/components/localized-text";
import type { LocalizedValue } from "@/lib/utils";
import type { AboutPageQueryResult } from "@/sanity/types";
import { AboutDifferenceItem } from "./about-difference-item";

interface AboutDifferencesProps {
	title: LocalizedValue;
	description: LocalizedValue;
	differences: NonNullable<AboutPageQueryResult>["differencesList"];
}

export function AboutDifferences({
	title,
	description,
	differences,
}: AboutDifferencesProps) {
	if (!differences || differences.length === 0) return null;

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
				{differences.map((difference) => (
					<AboutDifferenceItem key={difference._key} difference={difference} />
				))}
			</div>
		</div>
	);
}
