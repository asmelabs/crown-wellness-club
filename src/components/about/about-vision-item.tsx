import type { AboutPageQueryResult } from "@/sanity/types";

interface AboutVisionItemProps {
	vision: NonNullable<NonNullable<AboutPageQueryResult>["visionList"]>[number];
}

export function AboutVisionItem({ vision }: AboutVisionItemProps) {
	return <div />;
}
