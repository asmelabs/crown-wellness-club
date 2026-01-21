import { sanityFetch } from "@/sanity/lib/client";
import { trainerSpecialitiesQuery } from "@/sanity/queries/trainer-specialities.query";
import type { TrainerSpecialitiesQueryResult } from "@/sanity/types";
import { TrainerSpecialityItem } from "./trainer-speciality-item";

interface TrainerSpecialitiesListProps {
	locale: string;
}

export async function TrainerSpecialitiesList({
	locale,
}: TrainerSpecialitiesListProps) {
	const trainerSpecialities = await sanityFetch<TrainerSpecialitiesQueryResult>(
		{
			query: trainerSpecialitiesQuery,
			params: { locale },
		},
	);

	if (!trainerSpecialities || trainerSpecialities.length === 0) return null;

	return (
		<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
			{trainerSpecialities.map((spec, index) => (
				<TrainerSpecialityItem
					key={spec.slug?.current ?? spec.name ?? `trainer-speciality-${index}`}
					speciality={spec}
				/>
			))}
		</div>
	);
}
