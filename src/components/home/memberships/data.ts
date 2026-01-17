import type { MembershipBannerStatType, MembershipPlanType } from "./types";

export const plans: MembershipPlanType[] = [
	{
		title: "Royal Essential",
		subtitle: "Luxury Entry",
		description:
			"A refined foundation with premium amenities, community access, and essential recovery benefits.",
		icon: "crown",
		features: [
			"Full club access",
			"Wellness lounge",
			"Community events",
			"Monthly assessment",
			"Member-only perks",
		],
		accent: "#A855F7",
	},
	{
		title: "Elite Performance",
		subtitle: "Most Popular",
		description:
			"Enhanced training, recovery, and priority services for members seeking peak performance.",
		icon: "sparkles",
		features: [
			"Priority studio access",
			"Recovery suite credits",
			"Performance testing",
			"Concierge scheduling",
			"VIP community events",
		],
		accent: "#00B4D8",
	},
	{
		title: "Founders Circle",
		subtitle: "Invitation Only",
		description:
			"The highest tier with exclusive access, personalized support, and founding member privileges.",
		icon: "star",
		features: [
			"Private training sessions",
			"Reserved wellness suites",
			"Founder-level events",
			"Dedicated concierge",
			"Priority booking",
		],
		accent: "#F59E0B",
	},
];

export const membershipBannerStats: MembershipBannerStatType[] = [
	{ title: "33%", subtitle: "Off First 6 Months" },
	{ title: "3", subtitle: "Free Personal Training Sessions" },
	{ title: "VIP", subtitle: "Grand Opening Access" },
];
