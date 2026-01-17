import type { IconName } from "lucide-react/dynamic";

export interface ServiceType {
	title: string;
	slug: string;
	subtitle: string;
	description: string;
	tags: string[]; // array but only 1 item
	image: string;
	icon: IconName; // use DynamicIcon from lucide-react/dynamic
	stats: {
		title: string;
		subtitle: string;
	}[]; // 3 items
	featuresTitle: string;
	features: string[]; // min 5, max 8
}
