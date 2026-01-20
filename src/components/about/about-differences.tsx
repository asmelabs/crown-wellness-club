import type { LocalizedValue } from "@/lib/utils";
import type { AboutPageQueryResult } from "@/sanity/types";

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
	return <div />;
}
