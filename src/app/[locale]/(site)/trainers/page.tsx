import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { TrainerSpecialitiesList } from "@/components/trainers/trainer-specialities-list";
import { TrainersHeader } from "@/components/trainers/trainers-header";
import { TrainersList } from "@/components/trainers/trainers-list";
import { TrainersSpecialities } from "@/components/trainers/trainers-specialities";
import { shouldRender } from "@/lib/get-settings";
import { sanityFetch } from "@/sanity/lib/client";
import { trainersPageQuery } from "@/sanity/queries/trainers-page.query";
import type { TrainersPageQueryResult } from "@/sanity/types";

export default async function TrainersPage({
	params,
}: PageProps<"/[locale]/trainers">) {
	const { locale } = await params;

	if (!(await shouldRender("trainers", locale))) {
		notFound();
	}

	setRequestLocale(locale);

	const trainersPage = await sanityFetch<TrainersPageQueryResult>({
		query: trainersPageQuery,
		params: { locale },
	});

	if (!trainersPage) {
		notFound();
	}

	return (
		<main className="bg-background">
			<TrainersHeader
				title={trainersPage.title}
				subtitle={trainersPage.subtitle}
				icon={trainersPage.pageHeaderIcon}
				stats={trainersPage.stats}
			/>

			<section className="border-border/40 border-t bg-muted/10">
				<div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-16 sm:py-20">
					<TrainersSpecialities
						title={trainersPage.specialitiesTitle}
						subtitle={trainersPage.specialitiesSubtitle}
						icon={trainersPage.specialitiesHeaderIcon}
					/>

					<TrainerSpecialitiesList locale={locale} />
				</div>
			</section>

			<TrainersList
				title={trainersPage.trainersTitle}
				subtitle={trainersPage.trainersSubtitle}
				locale={locale}
			/>
		</main>
	);
}
