import type { LocalizedValue } from "@/lib/utils";
import type { AboutPageQueryResult } from "@/sanity/types";

interface AboutValuesProps {
	title: LocalizedValue;
	description: LocalizedValue;
	values: NonNullable<AboutPageQueryResult>["valuesList"];
}

export function AboutValues({ title, description, values }: AboutValuesProps) {
	return <div />;
}
