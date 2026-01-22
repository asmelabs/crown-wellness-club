import { siteUrl } from "@/sanity/env";
import type {
	EVENTS_QUERYResult,
	SERVICES_QUERYResult,
	TrainersQueryResult,
} from "@/sanity/types";
import { getImgUrl } from "./get-img-url";
import type { getSettings } from "./get-settings";
import { resolveLocalizedValue } from "./utils";

type Settings = Awaited<ReturnType<typeof getSettings>>;

type Trainer = NonNullable<NonNullable<TrainersQueryResult>[number]>;
type Service = NonNullable<NonNullable<SERVICES_QUERYResult>[number]>;
type Event = NonNullable<NonNullable<EVENTS_QUERYResult>[number]>;

export function generateOrganizationSchema(settings?: Settings | null) {
	if (!settings) {
		return {
			"@type": "Organization",
			"@id": `${siteUrl}/#organization`,
			name: "Crown Wellness Club",
			url: siteUrl,
		};
	}

	return {
		"@type": "Organization",
		"@id": `${siteUrl}/#organization`,
		name: settings.siteName || "Crown Wellness Club",
		url: siteUrl,
		logo: settings.logo ?? undefined,
		contactPoint: {
			"@type": "ContactPoint",
			telephone: settings.phone ?? undefined,
			email: settings.email ?? undefined,
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

export function generateLocalBusinessSchema(settings?: Settings | null) {
	if (!settings) {
		return {
			"@type": "HealthClub",
			"@id": `${siteUrl}/#localbusiness`,
			name: "Crown Wellness Club",
			url: siteUrl,
		};
	}

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
		telephone: settings.phone ?? undefined,
		email: settings.email ?? undefined,
		address: {
			"@type": "PostalAddress",
			streetAddress: settings.address ?? undefined,
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

export function generateWebSiteSchema(settings?: Settings | null) {
	if (!settings) {
		return {
			"@type": "WebSite",
			"@id": `${siteUrl}/#website`,
			name: "Crown Wellness Club",
			url: siteUrl,
		};
	}

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
	items: { name: string; href: string }[] = [],
) {
	if (items.length === 0) {
		return {
			"@context": "https://schema.org",
			"@type": "BreadcrumbList",
			itemListElement: [],
		};
	}

	return {
		"@context": "https://schema.org",
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

export function generatePersonSchema(trainer?: Trainer | null) {
	if (!trainer) {
		return {
			"@type": "Person",
			name: "Crown Wellness Club Trainer",
			url: siteUrl,
		};
	}

	const imageUrl = getImgUrl(trainer.image) ?? undefined;

	return {
		"@type": "Person",
		name: trainer.name ?? undefined,
		jobTitle: trainer.title ?? undefined,
		description: trainer.bio ?? undefined,
		image: imageUrl,
		worksFor: {
			"@type": "Organization",
			"@id": `${siteUrl}/#organization`,
		},
		knowsLanguage: trainer.languages
			?.filter((l): l is NonNullable<typeof l> => l !== null)
			.map((l) => l.language)
			.filter(Boolean),
	};
}

export function generateTrainersSchema(trainers: Trainer[] = []) {
	if (trainers.length === 0) {
		return {
			"@context": "https://schema.org",
			"@type": "ItemList",
			name: "Our Trainers",
			itemListElement: [],
		};
	}

	return {
		"@context": "https://schema.org",
		"@type": "ItemList",
		name: "Our Trainers",
		itemListElement: trainers.map((trainer, index) => ({
			"@type": "ListItem",
			position: index + 1,
			item: generatePersonSchema(trainer),
		})),
	};
}

export function generateServiceSchema(
	service?: Service | null,
	settings?: Settings | null,
) {
	if (!service || !settings) {
		return {
			"@type": "Service",
			name: "Service",
			url: siteUrl,
		};
	}

	const imageUrl = getImgUrl(service.image) ?? undefined;

	return {
		"@type": "Service",
		name: service.title ?? undefined,
		description: service.description ?? undefined,
		image: imageUrl,
		provider: {
			"@type": "HealthClub",
			"@id": `${siteUrl}/#localbusiness`,
			name: settings.siteName || "Crown Wellness Club",
		},
	};
}

export function generateServicesSchema(
	services: Service[] = [],
	settings?: Settings | null,
) {
	if (services.length === 0) {
		return {
			"@context": "https://schema.org",
			"@type": "ItemList",
			name: "Our Services",
			itemListElement: [],
		};
	}

	return {
		"@context": "https://schema.org",
		"@type": "ItemList",
		name: "Our Services",
		itemListElement: services.map((service, index) => ({
			"@type": "ListItem",
			position: index + 1,
			item: generateServiceSchema(service, settings),
		})),
	};
}

export function generateEventSchema(
	event?: Event | null,
	settings?: Settings | null,
) {
	if (!event || !settings) {
		return {
			"@type": "Event",
			name: "Event",
			url: siteUrl,
		};
	}

	const imageUrl = getImgUrl(event.image) ?? undefined;

	return {
		"@type": "Event",
		name: event.title ?? undefined,
		description: event.description ?? undefined,
		image: imageUrl,
		startDate: event.date ?? undefined,
		endDate: event.endDate ?? undefined,
		eventStatus: "https://schema.org/EventScheduled",
		eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
		location: {
			"@type": "Place",
			name: settings.siteName || "Crown Wellness Club",
			address: {
				"@type": "PostalAddress",
				streetAddress: settings.address ?? undefined,
				addressLocality: "Baku",
				addressCountry: "AZ",
			},
		},
		organizer: {
			"@type": "Organization",
			"@id": `${siteUrl}/#organization`,
			name: settings.siteName || "Crown Wellness Club",
		},
	};
}

export function generateEventsSchema(
	events: Event[] = [],
	settings?: Settings | null,
) {
	if (events.length === 0) {
		return {
			"@context": "https://schema.org",
			"@type": "ItemList",
			name: "Upcoming Events",
			itemListElement: [],
		};
	}

	return {
		"@context": "https://schema.org",
		"@type": "ItemList",
		name: "Upcoming Events",
		itemListElement: events.map((event, index) => ({
			"@type": "ListItem",
			position: index + 1,
			item: generateEventSchema(event, settings),
		})),
	};
}
