import type { AboutPageQueryResult } from "@/sanity/types";

interface AboutValueItemProps {
	value: NonNullable<NonNullable<AboutPageQueryResult>["valuesList"]>[number];
}

export function AboutValueItem({ value }: AboutValueItemProps) {
	return <div />;
}
