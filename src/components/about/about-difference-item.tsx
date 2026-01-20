import type { AboutPageQueryResult } from "@/sanity/types";

interface AboutDifferenceItemProps {
	difference: NonNullable<
		NonNullable<AboutPageQueryResult>["differencesList"]
	>[number];
}

export function AboutDifferenceItem({ difference }: AboutDifferenceItemProps) {
	return <div />;
}
