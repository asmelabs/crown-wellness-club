import type { Metadata } from "next";
import { Suspense } from "react";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar/navbar";
import { JsonLd } from "@/components/structured-data";
import { getMetaSettings, getSettings } from "@/lib/get-settings";
import { generateFullSchema } from "@/lib/structured-data";

export async function generateMetadata({
	params,
}: LayoutProps<"/[locale]">): Promise<Metadata> {
	const { locale } = await params;
	const settings = await getMetaSettings(locale);

	return {
		title: settings.defaultSeo.title,
		description: settings.defaultSeo.description,
		openGraph: {
			title: settings.defaultSeo.ogTitle,
			description: settings.defaultSeo.ogDescription,
			images: settings.defaultSeo.ogImageUrl
				? [{ url: settings.defaultSeo.ogImageUrl }]
				: undefined,
		},
	};
}

export default async function SiteLayout({
	children,
	params,
}: LayoutProps<"/[locale]">) {
	const { locale } = await params;
	const settings = await getSettings(locale);
	const structuredData = generateFullSchema(settings);

	return (
		<>
			<JsonLd data={structuredData} />

			<div>
				<Suspense>
					<Navbar locale={locale} />
				</Suspense>
				<main>{children}</main>
				<Footer locale={locale} />
			</div>
		</>
	);
}
