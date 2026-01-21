import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { AboutDifferences } from "@/components/about/about-differences";
import { AboutHeader } from "@/components/about/about-header";
import { AboutIntro } from "@/components/about/about-intro";
import { AboutStats } from "@/components/about/about-stats";
import { AboutValues } from "@/components/about/about-values";
import { AboutVisions } from "@/components/about/about-visions";
import { shouldRender } from "@/lib/get-settings";
import { sanityFetch } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { aboutPageQuery } from "@/sanity/queries/about-page.query";
import type { AboutPageQueryResult } from "@/sanity/types";

export default async function AboutPage({
	params,
}: PageProps<"/[locale]/about">) {
	const { locale } = await params;

	if (!(await shouldRender("about", locale))) {
		notFound();
	}

	setRequestLocale(locale);

	const aboutPageData = await sanityFetch<AboutPageQueryResult>({
		query: aboutPageQuery,
		params: { locale },
	});

	if (!aboutPageData) {
		notFound();
	}

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

			<section className="border-border/40 border-t bg-muted/10">
				<div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-16 sm:py-20">
					<AboutIntro
						title={aboutPageData.introTitle}
						description={aboutPageData.introDesc}
						banner={aboutPageData.introBanner}
						imageUrl={introImageUrl}
						imageCaption={aboutPageData.introImageCaption}
						imageDescription={aboutPageData.introImageDescription}
						imageIcon={aboutPageData.introImageIcon}
					/>
				</div>
			</section>

			<section className="border-border/40 border-t bg-background">
				<div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-16 sm:py-20">
					<AboutStats
						title={aboutPageData.statsTitle}
						description={aboutPageData.statsDescription}
						icon={aboutPageData.statsIcon}
						stats={aboutPageData.statsList}
					/>
				</div>
			</section>

			<section className="border-border/40 border-t bg-muted/10">
				<div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-16 sm:py-20">
					<AboutDifferences
						title={aboutPageData.differencesTitle}
						description={aboutPageData.differencesDescription}
						differences={aboutPageData.differencesList}
					/>
				</div>
			</section>

			<section className="border-border/40 border-t bg-background">
				<div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-16 sm:py-20">
					<AboutValues
						title={aboutPageData.valuesTitle}
						description={aboutPageData.valuesDescription}
						values={aboutPageData.valuesList}
					/>
				</div>
			</section>

			<section className="border-border/40 border-t bg-muted/10">
				<div className="mx-auto flex max-w-6xl flex-col gap-10 px-6 py-16 sm:py-20">
					<AboutVisions
						title={aboutPageData.visionTitle}
						description={aboutPageData.visionDescription}
						visions={aboutPageData.visionList}
					/>
				</div>
			</section>
		</main>
	);
}
