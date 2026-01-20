import { CTAButton } from "@/components/cta-button";
import { SanityIcon } from "@/components/sanity-icon";
import { Badge } from "@/components/ui/badge";
import {
	Card,
	CardContent,
	CardFooter,
	CardHeader,
} from "@/components/ui/card";
import { Link } from "@/i18n/navigation";
import type { PRICING_PLANS_QUERYResult } from "@/sanity/types";

interface MembershipPlanItemProps {
	plan?: PRICING_PLANS_QUERYResult[number] | null;
}

export function MembershipPlanItem({ plan }: MembershipPlanItemProps) {
	if (!plan || !plan.name || !plan.slug) return null;

	const { name, subtitle, description, features, icon, accent, slug } = plan;

	const iconContent = icon ? icon : "sparkles";
	const accentColor = accent ? accent.value : "#00B4D8";

	return (
		<Card
			key={slug.current}
			className="group relative overflow-hidden border border-border/60 bg-linear-to-br from-background via-background to-muted/40 transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10"
		>
			<div
				className="pointer-events-none absolute inset-0 opacity-70"
				style={{
					background:
						`radial-gradient(60% 60% at 0% 0%, ${accentColor}33, transparent 60%),` +
						`radial-gradient(60% 60% at 100% 0%, ${accentColor}22, transparent 60%)`,
				}}
			/>
			<div
				className="pointer-events-none absolute inset-x-0 top-0 h-1"
				style={{ backgroundColor: accentColor }}
			/>
			<CardHeader className="space-y-3">
				<div className="flex items-center justify-between">
					<div
						className="flex size-12 items-center justify-center rounded-full text-white shadow-sm"
						style={{ backgroundColor: accentColor }}
					>
						<SanityIcon icon={iconContent} className="size-6" />
					</div>
					{subtitle && (
						<Badge
							variant="default"
							className="text-white"
							style={{ backgroundColor: accentColor }}
						>
							{plan.subtitle}
						</Badge>
					)}
				</div>
				<h3 className="text-3xl font-semibold">{name}</h3>
				{description && (
					<p className="text-base text-muted-foreground">{description}</p>
				)}
			</CardHeader>
			<CardContent className="space-y-5">
				<Link href="/#contact">
					<CTAButton className="w-full" containerClassName="w-full">
						Get Started
					</CTAButton>
				</Link>
				{features && features.length > 0 && (
					<div className="space-y-2 mt-8">
						{features.map(({ feature }) => (
							<div
								key={feature}
								className="flex items-start gap-2 text-sm text-muted-foreground"
							>
								<span
									className="mt-1 size-1.5 rounded-full"
									style={{ backgroundColor: accentColor }}
								/>
								<span>{feature}</span>
							</div>
						))}
					</div>
				)}
			</CardContent>
			<CardFooter />
		</Card>
	);
}
