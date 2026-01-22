import { BriefcaseIcon, ClockIcon, UserIcon } from "lucide-react";
import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { LocalizedText } from "@/components/localized-text";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { getImgUrl } from "@/lib/get-img-url";
import { cn } from "@/lib/utils";
import type { TrainersQueryResult } from "@/sanity/types";

interface TrainerCardProps {
	trainer: NonNullable<NonNullable<TrainersQueryResult>[number]>;
}

export async function TrainerCard({ trainer }: TrainerCardProps) {
	const t = await getTranslations("trainers");

	const {
		name,
		bio,
		experience,
		image,
		languages,
		primaryColor,
		tags,
		title,
		workingHours,
	} = trainer;

	const imageUrl = getImgUrl(image);
	const accentColor = primaryColor?.value ?? "#6d28d9";
	const schedule = workingHours?.[0];
	const scheduleDays = schedule?.days;
	const scheduleHours = schedule?.hours;
	const trainerName = name ?? t("unnamed");
	const safeTags = (tags ?? [])
		.filter((tag): tag is NonNullable<typeof tag> => tag !== null)
		.map((tag) => tag.tag)
		.filter((tag): tag is string => Boolean(tag));
	const safeLanguages = (languages ?? [])
		.filter(
			(language): language is NonNullable<typeof language> => language !== null,
		)
		.map((language) => language.language)
		.filter((language): language is string => Boolean(language));
	const visibleTags = safeTags.slice(0, 2);
	const remainingTags = safeTags.length - visibleTags.length;

	return (
		<Card className="group overflow-hidden pt-0">
			<CardHeader className="relative px-0">
				<div
					className={cn(
						"relative flex h-52 w-full items-center justify-center overflow-hidden text-white",
						imageUrl ? "bg-muted/40" : "bg-muted",
					)}
					style={{
						background: imageUrl
							? undefined
							: `linear-gradient(135deg, ${accentColor}, ${accentColor}80)`,
					}}
				>
					{imageUrl ? (
						<Image
							src={imageUrl}
							alt={trainerName}
							width={900}
							height={600}
							className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
							priority={false}
						/>
					) : (
						<div className="flex flex-col items-center gap-3 text-white/90">
							<div className="flex size-16 items-center justify-center rounded-full bg-white/15 text-white shadow-sm">
								<UserIcon className="size-8" />
							</div>
							<LocalizedText
								text={trainerName}
								className="text-sm font-semibold"
							/>
						</div>
					)}
				</div>
			</CardHeader>

			<CardContent className="space-y-4 pt-4">
				<div className="space-y-1">
					<h3 className="text-lg font-semibold text-foreground">
						<LocalizedText text={trainerName} />
					</h3>
					{title ? (
						<p className="text-primary text-sm font-medium">
							<LocalizedText text={title} />
						</p>
					) : null}
				</div>

				<div className="space-y-2 text-sm text-muted-foreground">
					{experience ? (
						<div className="flex items-center gap-2">
							<BriefcaseIcon className="size-4 text-primary" />
							<span>{t("experience", { experience })}</span>
						</div>
					) : null}
					{scheduleDays || scheduleHours ? (
						<div className="flex items-center gap-2">
							<ClockIcon className="size-4 text-primary" />
							<span>
								{scheduleDays ? (
									<LocalizedText text={scheduleDays} className="text-current" />
								) : null}
								{scheduleDays && scheduleHours ? ": " : null}
								{scheduleHours}
							</span>
						</div>
					) : null}
				</div>

				{bio ? (
					<p className="text-sm text-muted-foreground">
						<LocalizedText text={bio} />
					</p>
				) : null}

				{safeTags.length > 0 ? (
					<div className="flex flex-wrap gap-2">
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
								{t("more", { count: remainingTags })}
							</Badge>
						) : null}
					</div>
				) : null}

				{safeLanguages.length > 0 ? (
					<div className="text-sm text-muted-foreground">
						<span className="font-semibold text-foreground">
							{t("languages")}
						</span>{" "}
						{safeLanguages.map((language, index) => (
							<span key={`${language}-${index}`}>
								<LocalizedText text={language} />
								{index < safeLanguages.length - 1 ? ", " : null}
							</span>
						))}
					</div>
				) : null}
			</CardContent>
		</Card>
	);
}
