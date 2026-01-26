import { getTranslations } from "next-intl/server";
import { Suspense } from "react";
import type { LocalizedValue } from "@/lib/utils";
import { sanityFetch } from "@/sanity/lib/client";
import { galleryImagesQuery } from "@/sanity/queries/galler-images.query";
import type { GalleryImagesQueryResult } from "@/sanity/types";
import { LocalizedText } from "../localized-text";
import { Empty, EmptyContent, EmptyHeader, EmptyTitle } from "../ui/empty";
import { GalleryImage } from "./gallery-image";

interface GalleryImagesProps {
	selectedCategory?: string | null;
	title?: LocalizedValue;
	subtitle?: LocalizedValue;
	locale: string;
}

export async function GalleryImages({
	selectedCategory,
	title,
	subtitle,
	locale,
}: GalleryImagesProps) {
	const t = await getTranslations("gallery.images");
	const galleryImages = await sanityFetch<GalleryImagesQueryResult>({
		query: galleryImagesQuery,
		params: { locale, category: selectedCategory ?? null },
		tags: ["gallery", "images"],
	});

	const normalizedCategory = selectedCategory || "";

	return (
		<section
			id="gallery-images"
			className="border-t border-border/40 bg-background"
		>
			<div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-16 sm:py-20">
				<div className="mx-auto max-w-3xl space-y-3 text-center">
					<h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
						<LocalizedText text={title || "Gallery Images"} enablePaintedText />
					</h2>
					<LocalizedText
						text={subtitle}
						className="text-sm text-muted-foreground sm:text-base"
					/>
					{normalizedCategory ? (
						<p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
							{t("filtering-by", {
								category: normalizedCategory.replaceAll("-", " "),
							})}
						</p>
					) : null}
				</div>

				{!galleryImages || galleryImages.length === 0 ? (
					<Empty className="rounded-3xl border border-dashed border-border/60 bg-muted/20">
						<EmptyHeader>
							<EmptyTitle>{t("empty.title")}</EmptyTitle>
						</EmptyHeader>
						<EmptyContent className="text-muted-foreground">
							{t("empty.content")}
						</EmptyContent>
					</Empty>
				) : (
					<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
						<Suspense>
							{galleryImages.map((image, index) => (
								<GalleryImage
									key={
										image.slug?.current ??
										image.title ??
										`gallery-image-${index}`
									}
									image={image}
									index={index}
								/>
							))}
						</Suspense>
					</div>
				)}
			</div>
		</section>
	);
}
