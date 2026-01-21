import type { LocalizedValue } from "@/lib/utils";
import { sanityFetch } from "@/sanity/lib/client";
import { trainersQuery } from "@/sanity/queries/trainers.query";
import type { TrainersQueryResult } from "@/sanity/types";
import { LocalizedText } from "../localized-text";
import {
	Empty,
	EmptyContent,
	EmptyDescription,
	EmptyHeader,
	EmptyTitle,
} from "../ui/empty";
import { TrainerCard } from "./trainer-card";

interface TrainersListProps {
	title: LocalizedValue;
	subtitle: LocalizedValue;
	locale: string;
}
export async function TrainersList({
	title,
	subtitle,
	locale,
}: TrainersListProps) {
	const trainers = await sanityFetch<TrainersQueryResult>({
		query: trainersQuery,
		params: { locale },
	});

	if (!trainers || trainers.length === 0) return null;

	return (
		<section
			id="trainers-list"
			className="border-t border-border/40 bg-background"
		>
			<div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-16 sm:py-20">
				<div className="mx-auto max-w-3xl space-y-3 text-center">
					<h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
						<LocalizedText text={title || "Meet Our Team"} enablePaintedText />
					</h2>
					<LocalizedText
						text={subtitle}
						className="text-sm text-muted-foreground sm:text-base"
					/>
				</div>

				{!trainers || trainers.length === 0 ? (
					<Empty className="rounded-3xl border border-dashed border-border/60 bg-muted/20">
						<EmptyHeader>
							<EmptyTitle>No trainers yet</EmptyTitle>
							<EmptyDescription>
								Be patient, we will have them soon.
							</EmptyDescription>
						</EmptyHeader>
						<EmptyContent className="text-muted-foreground">
							Trainers will appear here automatically once published.
						</EmptyContent>
					</Empty>
				) : (
					<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
						{trainers.map((trainer, index) => (
							<TrainerCard
								key={
									trainer.slug?.current ?? trainer.name ?? `trainer-${index}`
								}
								trainer={trainer}
							/>
						))}
					</div>
				)}
			</div>
		</section>
	);
}
