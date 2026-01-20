import type { LocalizedValue } from "@/lib/utils";
import type { Icon } from "@/sanity/types";

interface AboutHeaderProps {
	title: LocalizedValue;
	subtitle: LocalizedValue;
	icon: Icon | null;
	annoc: LocalizedValue;
}

export function AboutHeader({
	title,
	subtitle,
	icon,
	annoc,
}: AboutHeaderProps) {
	return <div />;
}
