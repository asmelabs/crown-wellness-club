/** biome-ignore-all lint/suspicious/noExplicitAny: have to put any */
import { createClient, type QueryParams } from "next-sanity";

import { apiVersion, dataset, projectId } from "../env";
import { replaceDynamicLocaleParam } from "./utils";

export const client = createClient({
	projectId,
	dataset,
	apiVersion,
	useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
});

export async function sanityFetch<T = any>({
	query,
	params = {},
	revalidate = 60,
	tags = [],
}: {
	query: string;
	params?: QueryParams;
	revalidate?: number | false;
	tags?: string[];
}): Promise<T> {
	const finalQuery = replaceDynamicLocaleParam(
		query,
		(params?.locale as string) || "en",
	);

	return client.fetch(finalQuery, params, {
		cache: "force-cache",
		next: {
			tags,
			revalidate: tags.length ? false : revalidate,
		},
	});
}
