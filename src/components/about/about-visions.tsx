import type { LocalizedValue } from "@/lib/utils";
import type { AboutPageQueryResult } from "@/sanity/types";

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
	return <div />;
}
