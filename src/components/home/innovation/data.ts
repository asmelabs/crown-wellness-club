import type { InnovationItemType, InnovationStatType } from "./types";

export const innovationStats: InnovationStatType[] = [
	{ title: "99.9%", subtitle: "System uptime", icon: "shield-check" },
	{ title: "24/7", subtitle: "Health monitoring", icon: "heart-pulse" },
	{ title: "< 50ms", subtitle: "Response time", icon: "bolt" },
	{ title: "150+", subtitle: "Smart sensors", icon: "radar" },
];

export const innovationItems: InnovationItemType[] = [
	{
		title: "AI Personal Coach",
		subtitle: "Adaptive Training",
		description:
			"Real-time coaching that adjusts your plan to match recovery, performance, and goals.",
		icon: "sparkles",
		primaryColor: "#9B5DE5",
		tag: "AI",
	},
	{
		title: "Biometric Integration",
		subtitle: "Live Insights",
		description:
			"Track sleep, readiness, and recovery with seamless wearable and sensor integration.",
		icon: "activity",
		primaryColor: "#00B4D8",
		tag: "Wearables",
	},
	{
		title: "Smart Recovery",
		subtitle: "Optimized Rest",
		description:
			"Personalized recovery protocols powered by thermal, compression, and mobility data.",
		icon: "heart",
		primaryColor: "#F77F00",
		tag: "Recovery",
	},
	{
		title: "Performance Labs",
		subtitle: "Precision Training",
		description:
			"Advanced testing to refine strength, endurance, and athletic efficiency.",
		icon: "gauge",
		primaryColor: "#00A34A",
		tag: "Labs",
	},
	{
		title: "Safety Intelligence",
		subtitle: "Always Protected",
		description:
			"Proactive monitoring and alerts for safer sessions and smarter progress tracking.",
		icon: "shield",
		primaryColor: "#FF6B6B",
		tag: "Safety",
	},
	{
		title: "Immersive Zones",
		subtitle: "Mind & Focus",
		description:
			"Soundscapes, lighting, and climate controls tuned to elevate focus and flow.",
		icon: "sparkle",
		primaryColor: "#5C7AEA",
		tag: "Experience",
	},
];
