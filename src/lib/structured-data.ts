import { siteUrl } from "@/sanity/env";
import type { getSettings } from "./get-settings";
import { resolveLocalizedValue } from "./utils";

type Settings = Awaited<ReturnType<typeof getSettings>>;

export function generateOrganizationSchema(settings: Settings) {
	return {
		"@type": "Organization",
		"@id": `${siteUrl}/#organization`,
		name: settings.siteName || "Crown Wellness Club",
		url: siteUrl,
		logo: settings.logo ?? undefined,
		contactPoint: {
			"@type": "ContactPoint",
			telephone: settings.phone,
			email: settings.email,
			contactType: "customer service",
		},
		sameAs: [
			settings.socialLinks?.instagram,
			settings.socialLinks?.facebook,
			settings.socialLinks?.youtube,
			settings.socialLinks?.tiktok,
			settings.socialLinks?.telegram,
		].filter(Boolean),
	};
}

export function generateLocalBusinessSchema(settings: Settings) {
	// Convert working hours to schema.org format
	const openingHours = settings.workingHours?.map((wh) => {
		const days = resolveLocalizedValue(wh.days);
		return `${days} ${wh.hours}`;
	});

	return {
		"@type": "HealthClub",
		"@id": `${siteUrl}/#localbusiness`,
		name: settings.siteName || "Crown Wellness Club",
		url: siteUrl,
		telephone: settings.phone,
		email: settings.email,
		address: {
			"@type": "PostalAddress",
			streetAddress: settings.address,
			addressLocality: "Baku",
			addressCountry: "AZ",
		},
		openingHours,
		sameAs: [
			settings.socialLinks?.instagram,
			settings.socialLinks?.facebook,
			settings.socialLinks?.youtube,
			settings.socialLinks?.tiktok,
			settings.socialLinks?.telegram,
		].filter(Boolean),
	};
}

export function generateWebSiteSchema(settings: Settings) {
	return {
		"@type": "WebSite",
		"@id": `${siteUrl}/#website`,
		name: settings.siteName || "Crown Wellness Club",
		url: siteUrl,
		publisher: {
			"@id": `${siteUrl}/#organization`,
		},
	};
}

export function generateBreadcrumbSchema(
	items: { name: string; href: string }[],
) {
	return {
		"@type": "BreadcrumbList",
		itemListElement: items.map((item, index) => ({
			"@type": "ListItem",
			position: index + 1,
			name: item.name,
			item: `${siteUrl}${item.href}`,
		})),
	};
}

export function generateFullSchema(settings?: Settings | null) {
	if (!settings) {
		return {
			"@context": "https://schema.org",
			"@graph": [],
		};
	}

	return {
		"@context": "https://schema.org",
		"@graph": [
			generateOrganizationSchema(settings),
			generateLocalBusinessSchema(settings),
			generateWebSiteSchema(settings),
		],
	};
}
