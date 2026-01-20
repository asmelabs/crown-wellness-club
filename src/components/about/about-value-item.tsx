import { LocalizedText } from "@/components/localized-text";
import { SanityIcon } from "@/components/sanity-icon";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { resolveLocalizedValue } from "@/lib/utils";
import type { AboutPageQueryResult } from "@/sanity/types";

interface AboutValueItemProps {
	value: NonNullable<NonNullable<AboutPageQueryResult>["valuesList"]>[number];
}

export function AboutValueItem({ value }: AboutValueItemProps) {
	const primaryColor = value.primaryColor?.value ?? "#2563eb";
	const tags = (value.tags ?? [])
		.map((tag) => resolveLocalizedValue(tag))
		.filter((tag) => tag.length > 0);
	const tag = tags[0];

	return (
		<Card
			className="group relative h-full overflow-hidden border-border/60 bg-background/80 transition-transform duration-300 hover:-translate-y-1"
			style={{ "--glow": primaryColor } as React.CSSProperties}
		>
			<div className="pointer-events-none absolute -inset-10 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100 bg-[radial-gradient(circle_at_top,var(--glow),transparent_60%)]" />
			<div
				className="pointer-events-none absolute inset-x-0 top-0 h-1 opacity-80"
				style={{ backgroundColor: primaryColor }}
			/>
			<CardContent className="relative z-10 flex h-full flex-col gap-4 pt-8">
				<div className="flex items-start gap-3">
					<div
						className="flex size-12 items-center justify-center rounded-2xl text-white shadow-sm"
						style={{ backgroundColor: `${primaryColor}CC` }}
					>
						<SanityIcon icon={value.icon || "sparkles"} className="size-6" />
					</div>
					<div className="space-y-1">
						<h3 className="text-base font-semibold">
							<LocalizedText text={value.title} />
						</h3>
						<LocalizedText
							text={value.subtitle}
							className="text-xs text-muted-foreground"
						/>
					</div>
				</div>

				{value.description ? (
					<p className="text-sm text-muted-foreground">
						<LocalizedText text={value.description} />
					</p>
				) : null}

				{tag ? (
					<Badge
						variant="outline"
						className="mt-auto w-fit rounded-full border-border/60 bg-muted/40 px-2 text-xs text-muted-foreground"
					>
						<LocalizedText text={tag} />
					</Badge>
				) : null}
			</CardContent>
		</Card>
	);
}
