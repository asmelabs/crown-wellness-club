import type { IconName } from "lucide-react/dynamic";

export interface MembershipPlanType {
	title: string;
	subtitle: string;
	description: string;
	icon: IconName;
	features: string[];
	accent: string;
}

export interface MembershipBannerStatType {
	title: string;
	subtitle: string;
}
