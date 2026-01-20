import Image from "next/image";
import { LocalizedText } from "@/components/localized-text";
import { SanityIcon } from "@/components/sanity-icon";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { resolveLocalizedValue } from "@/lib/utils";
import { urlFor } from "@/sanity/lib/image";
import type { AboutPageQueryResult } from "@/sanity/types";

interface AboutDifferenceItemProps {
	difference: NonNullable<
		NonNullable<AboutPageQueryResult>["differencesList"]
	>[number];
}

export function AboutDifferenceItem({ difference }: AboutDifferenceItemProps) {
	const primaryColor = difference.primaryColor?.value ?? "#6d28d9";
	const imageUrl = difference.image ? urlFor(difference.image).url() : null;
	const tags = (difference.tags ?? [])
		.map((tag) => resolveLocalizedValue(tag))
		.filter((tag) => tag.length > 0);
	const visibleTags = tags.slice(0, 2);
	const remainingTags = tags.length - visibleTags.length;

	return (
		<Card
			className="group relative h-full overflow-hidden"
			style={{ "--glow": primaryColor } as React.CSSProperties}
		>
			<div className="pointer-events-none absolute -inset-10 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100 bg-[radial-gradient(circle_at_top,var(--glow),transparent_60%)]" />
			<CardContent className="relative z-10 flex h-full flex-col gap-4">
				{imageUrl ? (
					<div className="relative overflow-hidden rounded-2xl">
						<Image
							src={imageUrl}
							alt={difference.title ? String(difference.title) : "Difference"}
							width={900}
							height={600}
							className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105"
							priority={false}
						/>
					</div>
				) : null}

				<div className="flex items-center gap-3">
					<div
						className="flex size-12 items-center justify-center rounded-full text-white shadow-sm"
						style={{ backgroundColor: primaryColor }}
					>
						<SanityIcon
							icon={difference.icon || "sparkles"}
							className="size-6"
						/>
					</div>
					<div className="space-y-1">
						<h3 className="text-lg font-semibold">
							<LocalizedText text={difference.title} />
						</h3>
						<LocalizedText
							text={difference.subtitle}
							className="text-sm text-muted-foreground"
						/>
					</div>
				</div>

				{difference.description ? (
					<p className="text-sm text-muted-foreground">
						<LocalizedText text={difference.description} />
					</p>
				) : null}

				{visibleTags.length > 0 ? (
					<div className="mt-auto flex flex-wrap gap-2">
						{visibleTags.map((tag) => (
							<Badge
								key={tag}
								variant="outline"
								className="rounded-full border-border/60 bg-muted/40 px-2 text-xs text-muted-foreground"
							>
								<LocalizedText text={tag} />
							</Badge>
						))}
						{remainingTags > 0 ? (
							<Badge
								variant="secondary"
								className="rounded-full px-2 text-xs text-muted-foreground"
							>
								+{remainingTags} more
							</Badge>
						) : null}
					</div>
				) : null}
			</CardContent>
		</Card>
	);
}
