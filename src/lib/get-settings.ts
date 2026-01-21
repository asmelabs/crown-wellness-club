import { getLocale } from "next-intl/server";
import { cache } from "react";
import type { navbarItems } from "@/components/navbar/data";
import { sanityFetch } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import {
	SETTINGS_META_QUERY,
	SETTINGS_QUERY,
} from "@/sanity/queries/settings-query";
import type {
	SETTINGS_META_QUERYResult,
	SETTINGS_QUERYResult,
} from "@/sanity/types";

type PageSlug = (typeof navbarItems)[number]["slug"];

export const getMetaSettings = cache(async () => {
	const locale = await getLocale();
	const settings = await sanityFetch<SETTINGS_META_QUERYResult>({
		query: SETTINGS_META_QUERY,
		params: { locale },
	});

	return {
		siteName: settings?.siteName || "Crown Wellness Club",
		pageRendering: settings?.pageRendering || [],
		defaultSeo: {
			title:
				settings?.defaultSeo?.title ||
				settings?.siteName ||
				"Crown Wellness Club",
			description:
				settings?.defaultSeo?.description ||
				"The best fitness and wellness club in Azerbaijan",
			ogTitle:
				settings?.defaultSeo?.ogTitle ||
				settings?.siteName ||
				"Crown Wellness Club",
			ogDescription:
				settings?.defaultSeo?.ogDescription ||
				"The best fitness and wellness club in Azerbaijan",
			ogImageUrl: settings?.defaultSeo?.ogImage
				? urlFor(settings.defaultSeo.ogImage).url()
				: undefined,
		},
	};
});

export const getSettings = cache(async () => {
	const locale = await getLocale();
	const settings = await sanityFetch<SETTINGS_QUERYResult>({
		query: SETTINGS_QUERY,
		params: { locale },
	});

	return {
		siteName: settings?.siteName || "Crown Wellness Club",
		address: settings?.address,
		email: settings?.email,
		logo: settings?.logo ? urlFor(settings.logo).url() : undefined,
		mapEmbed: settings?.mapEmbed,
		phone: settings?.phone,
		socialLinks: settings?.socialLinks || {},
		workingHours: settings?.workingHours || [],
		pageRendering: settings?.pageRendering || [],
	};
});

const shouldRenderPage = async (
	slug: PageSlug,
	pageRendering: string[] | null | undefined,
) => {
	if (pageRendering?.includes(slug)) return true;

	return false;
};

export const shouldRender = cache(async (slug: PageSlug) => {
	const { pageRendering } = await getSettings();

	return shouldRenderPage(slug, pageRendering);
});
