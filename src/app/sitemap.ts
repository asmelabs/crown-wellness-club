import type { MetadataRoute } from "next";
import { navbarItems } from "@/components/navbar/data";
import { routing } from "@/i18n/routing";
import { getMetaSettings } from "@/lib/get-settings";
import { siteUrl } from "@/sanity/env";

export const revalidate = 3600; // 1 hour

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
	const { locales, defaultLocale } = routing;
	const settings = await getMetaSettings(defaultLocale);
	const enabledSlugs =
		!settings.pageRendering || settings.pageRendering.length === 0
			? navbarItems.map((item) => item.slug)
			: settings.pageRendering;

	const enabledPages = navbarItems
		.filter((item) => enabledSlugs.includes(item.slug))
		.map((item) => item.href);

	const entries: MetadataRoute.Sitemap = [];

	for (const page of enabledPages) {
		const languages: Record<string, string> = {};

		// Build alternates for all locales
		for (const locale of locales) {
			const localePath =
				locale === defaultLocale
					? page
					: `/${locale}${page === "/" ? "" : page}`;
			languages[locale] = `${siteUrl}${localePath}`;
		}

		// Add entry for default locale
		entries.push({
			url: `${siteUrl}${page}`,
			lastModified: new Date(),
			changeFrequency: page === "/" ? "weekly" : "monthly",
			priority: page === "/" ? 1 : 0.8,
			alternates: {
				languages,
			},
		});

		// Add entries for non-default locales
		for (const locale of locales) {
			if (locale !== defaultLocale) {
				const localePath = `/${locale}${page === "/" ? "" : page}`;
				entries.push({
					url: `${siteUrl}${localePath}`,
					lastModified: new Date(),
					changeFrequency: page === "/" ? "weekly" : "monthly",
					priority: page === "/" ? 0.9 : 0.7,
					alternates: {
						languages,
					},
				});
			}
		}
	}

	return entries;
}
