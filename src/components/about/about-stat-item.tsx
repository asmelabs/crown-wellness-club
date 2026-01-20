import type { AboutPageQueryResult } from "@/sanity/types";

interface AboutStatItemProps {
	stat: NonNullable<NonNullable<AboutPageQueryResult>["statsList"]>[number];
}

export function AboutStatItem({ stat }: AboutStatItemProps) {
	return <div />;
}
