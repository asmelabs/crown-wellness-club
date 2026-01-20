import { Sparkle } from "lucide-react";
import { DynamicIcon, type IconName } from "lucide-react/dynamic";
import type { Icon } from "@/sanity/types";

interface SanityIconProps {
	icon?: Icon | null;
	fallbackIcon?: IconName | true;
	className?: string;
}

export function SanityIcon({ icon, fallbackIcon, className }: SanityIconProps) {
	if (!icon) {
		if (!fallbackIcon) return null;

		return fallbackIcon === true ? (
			<Sparkle className={className} />
		) : (
			<DynamicIcon name={fallbackIcon} className={className} />
		);
	}

	return <DynamicIcon name={icon} className={className} />;
}
