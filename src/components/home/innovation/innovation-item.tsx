import { LocalizedText } from "@/components/localized-text";
import { SanityIcon } from "@/components/sanity-icon";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import type { HOME_PAGE_QUERYResult } from "@/sanity/types";

interface InnovationItemProps {
	item: NonNullable<
		NonNullable<HOME_PAGE_QUERYResult>["innovationList"]
	>[number];
}

export function InnovationItem({ item }: InnovationItemProps) {
	const primaryColor = item.primaryColor?.value
		? item.primaryColor.value
		: "#000000";
	const tag = item.tags?.[0];

	return (
		<Card
			className="group relative h-full overflow-hidden transition-transform duration-300 hover:scale-105"
			style={{ "--glow": primaryColor } as React.CSSProperties}
		>
			<div className="pointer-events-none absolute -inset-10 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100 bg-[radial-gradient(circle_at_top,var(--glow),transparent_60%)]" />

			<CardContent className="relative z-10 flex flex-col items-center justify-center gap-4 text-center">
				<div
					className="flex size-14 items-center justify-center rounded-full text-white shadow-sm"
					style={{ backgroundColor: primaryColor }}
				>
					<SanityIcon icon={item.icon} className="size-6" />
				</div>
				<div className="space-y-1">
					<h3 className="text-xl font-semibold">
						<LocalizedText text={item.title} />
					</h3>
					<p className="text-sm text-muted-foreground">
						<LocalizedText
							text={item.subtitle}
							enablePaintedText={true}
							paintCount={1}
						/>
					</p>
				</div>
				{tag && (
					<Badge
						variant="default"
						className="text-white"
						style={{ backgroundColor: primaryColor }}
					>
						<LocalizedText text={tag} />
					</Badge>
				)}
				<p className="text-sm text-muted-foreground">
					<LocalizedText text={item.description} />
				</p>
			</CardContent>
		</Card>
	);
}
