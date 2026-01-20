import type { LocalizedValue } from "@/lib/utils";
import type { AboutPageQueryResult, Icon } from "@/sanity/types";

interface AboutDifferencesProps {
	title: LocalizedValue;
	description: LocalizedValue;
	icon: Icon | null;
	differences: NonNullable<AboutPageQueryResult>["differencesList"];
}

export function AboutDifferences({
	title,
	description,
	icon,
	differences,
}: AboutDifferencesProps) {
	return <div />;
}
