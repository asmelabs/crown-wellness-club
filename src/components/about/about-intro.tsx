import Image from "next/image";
import { LocalizedText } from "@/components/localized-text";
import { SanityBanner } from "@/components/sanity-banner";
import { SanityIcon } from "@/components/sanity-icon";
import type { LocalizedValue } from "@/lib/utils";
import type { Banner, Icon } from "@/sanity/types";

interface AboutIntroProps {
	title: LocalizedValue;
	description: LocalizedValue;
	banner: Banner | null;
	imageUrl: string | null;
	imageCaption: LocalizedValue;
	imageDescription: LocalizedValue;
	imageIcon: Icon | null;
}

export function AboutIntro({
	title,
	description,
	banner,
	imageUrl,
	imageCaption,
	imageDescription,
	imageIcon,
}: AboutIntroProps) {
	return (
		<div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] lg:items-center">
			<div className="space-y-6">
				<div className="space-y-3">
					<h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
						<LocalizedText text={title} enablePaintedText />
					</h2>
					<LocalizedText
						text={description}
						className="text-sm text-muted-foreground sm:text-base"
					/>
				</div>

				{banner ? (
					<div className="max-w-3xl">
						<SanityBanner
							banner={banner}
							bannerProps={{
								cardClassName: "bg-primary/10 px-6 pt-6 rounded-2xl max-w-none",
								className: "gap-2",
								titleClassName: "text-2xl",
								subtitleClassName: "text-sm",
								descriptionClassName: "text-sm",
							}}
						/>
					</div>
				) : null}
			</div>

			<div className="relative overflow-hidden rounded-3xl border border-border/60 bg-muted/40">
				{imageUrl ? (
					<Image
						src={imageUrl}
						alt="About us"
						width={1200}
						height={900}
						className="h-full w-full object-cover"
						priority={false}
					/>
				) : (
					<div className="flex min-h-[320px] items-center justify-center text-muted-foreground">
						<SanityIcon icon={imageIcon || "image"} className="size-10" />
					</div>
				)}

				{imageIcon ? (
					<div className="absolute right-4 top-4 flex size-12 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-sm">
						<SanityIcon icon={imageIcon} className="size-6" />
					</div>
				) : null}

				{imageCaption || imageDescription ? (
					<div className="absolute inset-x-0 bottom-0 space-y-1 bg-background/70 px-5 py-4 backdrop-blur-sm">
						{imageCaption ? (
							<p className="text-sm font-semibold text-foreground">
								<LocalizedText text={imageCaption} />
							</p>
						) : null}
						{imageDescription ? (
							<p className="text-xs text-muted-foreground">
								<LocalizedText text={imageDescription} />
							</p>
						) : null}
					</div>
				) : null}
			</div>
		</div>
	);
}
