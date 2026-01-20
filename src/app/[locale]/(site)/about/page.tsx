import { notFound } from "next/navigation";
import { getLocale } from "next-intl/server";
import { sanityFetch } from "@/sanity/lib/client";
import { aboutPageQuery } from "@/sanity/queries/about-page.query";
import type { AboutPageQueryResult } from "@/sanity/types";

export default async function AboutPage() {
	const locale = await getLocale();
	const aboutPageData = await sanityFetch<AboutPageQueryResult>({
		query: aboutPageQuery,
		params: { locale },
	});

	if (!aboutPageData) {
		notFound();
	}

	console.log(aboutPageData);

	return <div />;
}
