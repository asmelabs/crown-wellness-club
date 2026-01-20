import type { CommunityItemType, CommunityStat } from "./types";

export const communityStats: CommunityStat[] = [
	{ title: "2,500+", subtitle: "Active Members", icon: "users" },
	{ title: "150+", subtitle: "Monthly Events", icon: "calendar" },
	{ title: "98%", subtitle: "Satisfaction Rate", icon: "badge-check" },
	{ title: "24/7", subtitle: "Community Support", icon: "message-circle" },
];

export const communityItems: CommunityItemType[] = [
	{
		title: "Social Events & Networking",
		subtitle: "Connect & Grow",
		description:
			"Exclusive gatherings that bring members together through shared goals and meaningful connections.",
		icon: "sparkles",
		primaryColor: "#A855F7",
	},
	{
		title: "Fitness Challenges",
		subtitle: "Compete & Inspire",
		description:
			"Monthly challenges designed to motivate progress, celebrate wins, and elevate performance.",
		icon: "trophy",
		primaryColor: "#F59E0B",
	},
	{
		title: "Wellness Workshops",
		subtitle: "Learn & Thrive",
		description:
			"Expert-led sessions covering recovery, nutrition, mindset, and lifestyle optimization.",
		icon: "book-open",
		primaryColor: "#22C55E",
	},
	{
		title: "Member Spotlights",
		subtitle: "Celebrate Stories",
		description:
			"Highlighting member journeys and achievements to inspire the entire community.",
		icon: "star",
		primaryColor: "#38BDF8",
	},
	{
		title: "Cultural Celebrations",
		subtitle: "Honor Traditions",
		description:
			"Events that reflect local culture, values, and shared traditions in a respectful environment.",
		icon: "flower-2",
		primaryColor: "#FB7185",
	},
	{
		title: "Community Support",
		subtitle: "Always Here",
		description:
			"Dedicated support and mentorship to keep you motivated, accountable, and supported.",
		icon: "heart-handshake",
		primaryColor: "#6366F1",
	},
];
