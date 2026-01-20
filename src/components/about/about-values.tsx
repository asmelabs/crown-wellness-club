import { LocalizedText } from "@/components/localized-text";
import type { LocalizedValue } from "@/lib/utils";
import type { AboutPageQueryResult } from "@/sanity/types";
import { AboutValueItem } from "./about-value-item";

interface AboutValuesProps {
	title: LocalizedValue;
	description: LocalizedValue;
	values: NonNullable<AboutPageQueryResult>["valuesList"];
}

export function AboutValues({ title, description, values }: AboutValuesProps) {
	if (!values || values.length === 0) return null;

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

			<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
				{values.map((value) => (
					<AboutValueItem key={value._key} value={value} />
				))}
			</div>
		</div>
	);
}
