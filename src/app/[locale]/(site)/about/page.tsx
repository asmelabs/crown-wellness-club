import { notFound } from "next/navigation";
import { getLocale } from "next-intl/server";
import { AboutDifferences } from "@/components/about/about-differences";
import { AboutHeader } from "@/components/about/about-header";
import { AboutIntro } from "@/components/about/about-intro";
import { AboutStats } from "@/components/about/about-stats";
import { AboutValues } from "@/components/about/about-values";
import { AboutVisions } from "@/components/about/about-visions";
import { sanityFetch } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { aboutPageQuery } from "@/sanity/queries/about-page.query";
import type { AboutPageQueryResult } from "@/sanity/types";

export default async function AboutPage() {
	const locale = await getLocale();
	const aboutPageData = await sanityFetch<AboutPageQueryResult>({
		query: aboutPageQuery,
		params: { locale },
	});

	if (!aboutPageData) {
		notFound();
	}

	console.log(aboutPageData);

	const introImageUrl = aboutPageData.introImage
		? urlFor(aboutPageData.introImage).url()
		: null;

	return (
		<main className="bg-background">
			<AboutHeader
				title={aboutPageData.title}
				subtitle={aboutPageData.subtitle}
				icon={aboutPageData.pageHeaderIcon}
				annoc={aboutPageData.aboutAnnoc}
			/>

			<AboutIntro
				title={aboutPageData.introTitle}
				description={aboutPageData.introDesc}
				banner={aboutPageData.introBanner}
				imageUrl={introImageUrl}
				imageCaption={aboutPageData.introImageCaption}
				imageDescription={aboutPageData.introImageDescription}
				imageIcon={aboutPageData.introImageIcon}
			/>

			<AboutStats
				title={aboutPageData.statsTitle}
				description={aboutPageData.statsDescription}
				icon={aboutPageData.statsIcon}
				stats={aboutPageData.statsList}
			/>

			<AboutDifferences
				title={aboutPageData.differencesTitle}
				description={aboutPageData.differencesDescription}
				differences={aboutPageData.differencesList}
			/>

			<AboutValues
				title={aboutPageData.valuesTitle}
				description={aboutPageData.valuesDescription}
				values={aboutPageData.valuesList}
			/>

			<AboutVisions
				title={aboutPageData.visionTitle}
				description={aboutPageData.visionDescription}
				visions={aboutPageData.visionList}
			/>
		</main>
	);
}
