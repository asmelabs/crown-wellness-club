import type { LocalizedValue } from "@/lib/utils";
import type { AboutPageQueryResult, Icon } from "@/sanity/types";

interface AboutStatsProps {
	title: LocalizedValue;
	description: LocalizedValue;
	icon: Icon | null;
	stats: NonNullable<AboutPageQueryResult>["statsTitle"];
}

export function AboutStats({
	title,
	description,
	icon,
	stats,
}: AboutStatsProps) {
	return <div />;
}
