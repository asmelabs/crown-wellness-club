import { Link } from "@/i18n/navigation";
import { sanityFetch } from "@/sanity/lib/client";
import { galleryImageCategoryQuery } from "@/sanity/queries/gallery-image-category.query";
import type { GalleryImageCategoryQueryResult } from "@/sanity/types";
import { GalleryCategoryItem } from "./gallery-category-item";

interface GalleryCategoriesProps {
	selectedCategory?: string | null;
	locale: string;
}

export async function GalleryCategories({
	selectedCategory,
	locale,
}: GalleryCategoriesProps) {
	const galleryCategories = await sanityFetch<GalleryImageCategoryQueryResult>({
		query: galleryImageCategoryQuery,
		params: { locale },
	});

	if (!galleryCategories || galleryCategories.length === 0) return null;

	const normalizedCategory = selectedCategory || "";
	const isAllActive = !normalizedCategory;

	return (
		<div className="space-y-6">
			<div className="flex flex-wrap items-center justify-center gap-3">
				<Link
					href="/gallery"
					className={`rounded-full border px-4 py-2 font-medium text-sm transition ${
						isAllActive
							? "border-primary/40 bg-primary/10 text-primary"
							: "border-border/60 bg-background/70 text-foreground hover:border-primary/30 hover:bg-muted/40"
					}`}
					aria-current={isAllActive ? "page" : undefined}
				>
					All
				</Link>
				{normalizedCategory ? (
					<span className="rounded-full border border-border/60 bg-background/70 px-4 py-2 text-muted-foreground text-xs">
						Showing “{normalizedCategory.replaceAll("-", " ")}”
					</span>
				) : null}
			</div>

			<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
				{galleryCategories.map((category, index) => (
					<GalleryCategoryItem
						key={category.slug ?? category.title ?? `gallery-category-${index}`}
						category={category}
						isActive={category.slug === normalizedCategory}
					/>
				))}
			</div>
		</div>
	);
}
