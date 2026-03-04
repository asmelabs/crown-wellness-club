"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { parseAsString, useQueryState } from "nuqs";
import { urlFor } from "@/sanity/lib/image";
import type { GalleryImagesQueryResult } from "@/sanity/types";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogPanel,
	DialogTitle,
	DialogTrigger,
} from "../ui/dialog";

interface GalleryImageProps {
	image: NonNullable<NonNullable<GalleryImagesQueryResult>[number]>;
	index: number;
}

export function GalleryImage({ image, index }: GalleryImageProps) {
	const t = useTranslations("gallery.images");

	const slug = image.slug?.current ?? "";
	const [openedImage, setOpenedImage] = useQueryState(
		"opened-image",
		parseAsString,
	);

	const imageUrl = image.image?.asset
		? urlFor(image.image).width(900).height(700).fit("crop").url()
		: null;
	const titleValue = image.title ?? t("untitled");
	const subtitleValue = image.subtitle ?? image.description ?? null;
	const fullImageUrl = image.image?.asset
		? urlFor(image.image).width(1800).height(1200).fit("max").url()
		: null;

	return (
		<Dialog
			open={openedImage === slug}
			onOpenChange={(open) => setOpenedImage(open ? slug : null)}
		>
			<DialogTrigger
				nativeButton={false}
				render={
					<article className="cursor-pointer group overflow-hidden rounded-2xl border border-border/60 bg-background/80 transition hover:border-primary/30 hover:shadow-sm" />
				}
			>
				<div className="relative aspect-4/3 overflow-hidden bg-muted/20">
					{imageUrl ? (
						<Image
							src={imageUrl}
							alt={titleValue}
							width={900}
							height={700}
							className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
							sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
							priority={index < 3}
						/>
					) : (
						<div className="flex h-full items-center justify-center text-sm text-muted-foreground">
							{t("coming-soon")}
						</div>
					)}

					{image.isFeatured ? (
						<span className="absolute left-4 top-4 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
							{t("featured")}
						</span>
					) : null}
				</div>

				<div className="space-y-2 p-5">
					<h3 className="text-lg font-semibold text-foreground">
						{titleValue}
					</h3>
					{image.description ? (
						<p className="text-sm text-muted-foreground">{image.description}</p>
					) : null}
				</div>
			</DialogTrigger>

			<DialogContent className="max-w-6xl overflow-hidden p-0">
				<DialogHeader className="flex flex-col gap-3 border-b bg-muted/30 px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
					<div className="space-y-1">
						<DialogTitle className="text-2xl font-semibold text-foreground">
							{titleValue}
						</DialogTitle>
						{subtitleValue ? (
							<DialogDescription className="text-sm text-muted-foreground">
								{subtitleValue}
							</DialogDescription>
						) : null}
					</div>
					{image.isFeatured ? (
						<span className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
							{t("featured")}
						</span>
					) : null}
				</DialogHeader>

				<DialogPanel className="p-0">
					<div className="relative aspect-5/3 w-full overflow-hidden bg-muted/20">
						{fullImageUrl ? (
							<Image
								src={fullImageUrl}
								alt={titleValue}
								width={1800}
								height={1200}
								className="h-full w-full object-cover"
								sizes="(max-width: 768px) 100vw, (max-width: 1280px) 80vw, 1200px"
								priority={index < 3}
							/>
						) : (
							<div className="flex h-full items-center justify-center text-sm text-muted-foreground">
								{t("coming-soon")}
							</div>
						)}
					</div>
				</DialogPanel>
			</DialogContent>
		</Dialog>
	);
}
