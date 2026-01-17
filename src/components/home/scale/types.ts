import type { IconName } from "lucide-react/dynamic";

export interface ScaleItemType {
	title: string;
	subtitle: string;
	description: string;
	icon: IconName;
	tags: string[];
	metric: string;
	primaryColor: string;
}
