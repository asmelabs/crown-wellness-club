import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { createLoader, parseAsString } from "nuqs/server";
import { GalleryCategories } from "@/components/gallery/gallery-categories";
import { GalleryCategoriesSection } from "@/components/gallery/gallery-categories-section";
import { GalleryHeader } from "@/components/gallery/gallery-header";
import { GalleryImages } from "@/components/gallery/gallery-images";
import { JsonLd } from "@/components/structured-data";
import { generateBreadcrumbSchema } from "@/lib/structured-data";
import { sanityFetch } from "@/sanity/lib/client";
import { galleryPageQuery } from "@/sanity/queries/gallery-page.query";
import type { GalleryPageQueryResult } from "@/sanity/types";

const loadSelectedCategory = createLoader({
	category: parseAsString,
});

export default async function GalleryPage({
	searchParams,
	params,
}: PageProps<"/[locale]/gallery">) {
	const { locale } = await params;

	// category slug is stored on query param
	const { category } = await loadSelectedCategory(searchParams);

	setRequestLocale(locale);

	const galleryPage = await sanityFetch<GalleryPageQueryResult>({
		query: galleryPageQuery,
		params: { locale },
	});

	if (!galleryPage) {
		notFound();
	}

	const selectedCategory = category || null;

	const breadcrumbs = generateBreadcrumbSchema([
		{ name: "Home", href: `/${locale}` },
		{ name: "Gallery", href: `/${locale}/gallery` },
	]);

	return (
		<>
			<JsonLd data={breadcrumbs} />

			<main className="bg-background">
				<GalleryHeader
					title={galleryPage.title}
					subtitle={galleryPage.subtitle}
					icon={galleryPage.pageHeaderIcon}
					stats={galleryPage.stats}
				/>

				<section className="border-border/40 border-t bg-muted/10">
					<div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-16 sm:py-20">
						<GalleryCategoriesSection
							title={galleryPage.categoriesTitle}
							subtitle={galleryPage.categoriesSubtitle}
							icon={galleryPage.categoriesHeaderIcon}
						/>

						<GalleryCategories
							selectedCategory={selectedCategory}
							locale={locale}
						/>
					</div>
				</section>

				<GalleryImages
					selectedCategory={selectedCategory}
					title={galleryPage.imagesTitle}
					subtitle={galleryPage.imagesSubtitle}
					locale={locale}
				/>
			</main>
		</>
	);
}
