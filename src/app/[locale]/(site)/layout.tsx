import type { Metadata } from "next";
import { Suspense } from "react";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar/navbar";
import { getMetaSettings } from "@/lib/get-settings";

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
	return (
		<div>
			<Suspense>
				<Navbar locale={locale} />
			</Suspense>
			<main>{children}</main>
			<Footer locale={locale} />
		</div>
	);
}
