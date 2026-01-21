import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import type { GalleryImageCategoryQueryResult } from "@/sanity/types";
import { SanityIcon } from "../sanity-icon";

interface GalleryCategoryItemProps {
	category: NonNullable<NonNullable<GalleryImageCategoryQueryResult>[number]>;
	isActive?: boolean;
}

export async function GalleryCategoryItem({
	category,
	isActive = false,
}: GalleryCategoryItemProps) {
	const t = await getTranslations("gallery.categories");
	const title = category.title ?? t("untitled");

	return (
		<Link
			href={
				!category.slug
					? "/gallery"
					: `/gallery?category=${category.slug.toString()}`
			}
			aria-disabled={!category.slug}
			aria-current={isActive ? "page" : undefined}
			className={cn(
				"group flex items-start gap-4 rounded-2xl border border-border/60 bg-background/80 p-4 transition hover:border-primary/40 hover:bg-muted/40",
				isActive && "border-primary/40 bg-primary/5 shadow-sm",
				!category.slug && "pointer-events-none opacity-60",
			)}
		>
			<div
				className={cn(
					"flex size-12 items-center justify-center rounded-xl border border-border/60 bg-muted/40 text-primary",
					isActive && "border-primary/30 bg-primary/10",
				)}
			>
				<SanityIcon icon={category.icon || "image"} className="size-5" />
			</div>

			<div className="min-w-0">
				<p className="font-semibold text-foreground text-sm">{title}</p>
				{category.subtitle ? (
					<p className="mt-1 text-muted-foreground text-xs">
						{category.subtitle}
					</p>
				) : null}
			</div>
		</Link>
	);
}
