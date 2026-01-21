import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CommunitySection } from "@/components/home/community/community-section";
import { ContactSection } from "@/components/home/contact/contact-section";
import { EventsSection } from "@/components/home/events/events-section";
import { HeroSection } from "@/components/home/hero/hero-section";
import { InnovationSection } from "@/components/home/innovation/innovation-section";
import { MembershipsSection } from "@/components/home/memberships/memberships-section";
import { ScaleSection } from "@/components/home/scale/scale-section";
import { ServicesSection } from "@/components/home/services/services-section";
import { shouldRender } from "@/lib/get-settings";
import { sanityFetch } from "@/sanity/lib/client";
import { resolveOpenGraphImage } from "@/sanity/lib/image";
import { HOME_PAGE_QUERY } from "@/sanity/queries";
import type { HOME_PAGE_QUERYResult } from "@/sanity/types";

export async function generateMetadata({
	params,
}: {
	params: Promise<{ locale: string }>;
}): Promise<Metadata> {
	const { locale } = await params;

	const homePageData = await sanityFetch<HOME_PAGE_QUERYResult>({
		query: HOME_PAGE_QUERY,
		params: { locale },
	});

	if (!homePageData || !homePageData.seo) {
		return {
			title: "Crown Wellness Club",
			description: "Crown Wellness Club",
		};
	}

	const title = homePageData.seo.title || "Crown Wellness Club";
	const description =
		homePageData.seo.description ||
		"The best fitness and wellness club in Azerbaijan";
	const ogTitle = homePageData.seo.ogTitle || "Crown Wellness Club";
	const ogDescription =
		homePageData.seo.ogDescription ||
		"The best fitness and wellness club in Azerbaijan";
	const ogImage = homePageData.seo.ogImage;

	const openGraphImage = resolveOpenGraphImage(ogImage);
	const images: NonNullable<Metadata["openGraph"]>["images"] = openGraphImage
		? [
				{
					url: openGraphImage.url,
					width: openGraphImage.width,
					height: openGraphImage.height,
					alt: openGraphImage.alt,
				},
			]
		: [];

	return {
		title,
		description,
		openGraph: {
			title: ogTitle,
			description: ogDescription,
			images,
		},
	};
}

interface HomePageProps {
	params: Promise<{ locale: string }>;
}

export default async function HomePage({ params }: HomePageProps) {
	if (!(await shouldRender("home"))) {
		notFound();
	}

	const { locale } = await params;

	const homePageData = await sanityFetch<HOME_PAGE_QUERYResult>({
		query: HOME_PAGE_QUERY,
		params: { locale },
	});

	if (!homePageData) {
		notFound();
	}

	const {
		// HERO
		heroTitle = "Premium Fitness & Wellness",
		heroSubtitle = "Elevate your lifestyle with world-class facilities, expert trainers, and a community dedicated to your transformation.",
		bgVideoUrl,
		// SERVICES
		servicesTitle = "Premium Experiences",
		servicesSubtitle = `Six distinct zones of luxury, each crafted to deliver world-class experiences while honoring Azerbaijan's cultural values.`,
		servicesBanner,
		// SCALE
		scaleTitle = "Impressive Scale",
		scaleSubtitle = "First interactive fitness in Azerbaijan luxury wellness club sets unprecedented standards with world-class facilities and cultural excellence.",
		scaleList,
		scaleBanner,
		// INNOVATION
		innovationTitle = "INNOVATION & TECHNOLOGY",
		innovationSubtitle = "Experience the future of wellness with cutting-edge technology that personalizes your journey, enhances your performance, and ensures your safety at every step.",
		innovationList,
		innovationStatsList,
		innovationBanner,

		// COMMUNITY
		communityTitle = "COMMUNITY & LIFESTYLE",
		communitySubtitle = "Join a vibrant community of wellness enthusiasts where connections are made, friendships are formed, and healthy lifestyles are celebrated together in an atmosphere of cultural respect and shared goals.",
		communityList,
		communityStatsList,
		// EVENTS
		eventsTitle = "Upcoming Events",
		eventsSubtitle = "Join our exciting upcoming events and be part of the Crown Wellness community experience.",
		eventsBanner,

		// MEMBERSHIPS
		membershipsAnnoc,
		membershipsTitle = "MEMBERSHIP EXCELLENCE",
		membershipsSubtitle = "Choose your path to luxury wellness. Each membership is crafted to deliver exceptional value and exclusive experiences in Azerbaijan's premier destination.",
		membershipsStats,
		membershipsBanner,

		// CONTACT
		contactTitle = "Get In Touch",
		contactSubtitle = "Ready to begin your luxury wellness journey? Contact us today and discover what makes Crown Wellness Club Azerbaijan's premier destination.",
	} = homePageData;

	return (
		<div>
			<HeroSection
				title={heroTitle}
				subtitle={heroSubtitle}
				bgVideoUrl={bgVideoUrl ?? undefined}
			/>
			<ServicesSection
				title={servicesTitle}
				subtitle={servicesSubtitle}
				banner={servicesBanner}
			/>
			<ScaleSection
				title={scaleTitle}
				subtitle={scaleSubtitle}
				items={scaleList}
				banner={scaleBanner}
			/>
			<InnovationSection
				title={innovationTitle}
				subtitle={innovationSubtitle}
				items={innovationList}
				stats={innovationStatsList}
				banner={innovationBanner}
			/>
			<CommunitySection
				title={communityTitle}
				subtitle={communitySubtitle}
				items={communityList}
				stats={communityStatsList}
			/>
			<EventsSection
				title={eventsTitle}
				subtitle={eventsSubtitle}
				banner={eventsBanner}
			/>
			<MembershipsSection
				title={membershipsTitle}
				subtitle={membershipsSubtitle}
				annoc={membershipsAnnoc}
				banner={membershipsBanner}
				stats={membershipsStats}
			/>
			<ContactSection title={contactTitle} subtitle={contactSubtitle} />
		</div>
	);
}
