import { siteUrl } from "@/sanity/env";
import { urlFor } from "@/sanity/lib/image";
import type {
	EVENTS_QUERYResult,
	SERVICES_QUERYResult,
	TrainersQueryResult,
} from "@/sanity/types";
import type { getSettings } from "./get-settings";
import { resolveLocalizedValue } from "./utils";

type Settings = Awaited<ReturnType<typeof getSettings>>;

type Trainer = NonNullable<NonNullable<TrainersQueryResult>[number]>;
type Service = NonNullable<NonNullable<SERVICES_QUERYResult>[number]>;
type Event = NonNullable<NonNullable<EVENTS_QUERYResult>[number]>;

export function generateOrganizationSchema(settings: Settings) {
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

export function generatePersonSchema(trainer: Trainer) {
	const imageUrl = trainer.image ? urlFor(trainer.image).url() : undefined;

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
		knowsLanguage: trainer.languages?.map((l) => l.language).filter(Boolean),
	};
}

export function generateTrainersSchema(trainers: Trainer[]) {
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

export function generateServiceSchema(service: Service, settings: Settings) {
	const imageUrl = service.image ? urlFor(service.image).url() : undefined;

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
	services: Service[],
	settings: Settings,
) {
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

export function generateEventSchema(event: Event, settings: Settings) {
	const imageUrl = event.image ? urlFor(event.image).url() : undefined;

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

export function generateEventsSchema(events: Event[], settings: Settings) {
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
