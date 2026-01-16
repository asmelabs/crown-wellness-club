import type { IconName } from "lucide-react/dynamic";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CommunitySection } from "@/components/home/community/community-section";
import type {
  CommunityItemType,
  CommunityStat,
} from "@/components/home/community/types";
import { ContactSection } from "@/components/home/contact/contact-section";
import { EventsSection } from "@/components/home/events/events-section";
import type { EventItemType } from "@/components/home/events/types";
import { HeroSection } from "@/components/home/hero/hero-section";
import { InnovationSection } from "@/components/home/innovation/innovation-section";
import type {
  InnovationItemType,
  InnovationStatType,
} from "@/components/home/innovation/types";
import { MembershipsSection } from "@/components/home/memberships/memberships-section";
import type { MembershipPlanType } from "@/components/home/memberships/types";
import { ScaleSection } from "@/components/home/scale/scale-section";
import type { ScaleItemType } from "@/components/home/scale/types";
import { ServicesSection } from "@/components/home/services/services-section";
import type { ServiceType } from "@/components/home/services/types";
import { sanityFetch } from "@/sanity/lib/client";
import { resolveOpenGraphImage, urlFor } from "@/sanity/lib/image";
import { HOME_PAGE_QUERY } from "@/sanity/queries";
import type { HOME_PAGE_QUERYResult } from "@/sanity/types";

type HomePageData = NonNullable<HOME_PAGE_QUERYResult>;
type ServicesListItem = NonNullable<HomePageData["servicesList"]>[number];
type ScaleListItem = NonNullable<HomePageData["scaleList"]>[number];
type InnovationListItem = NonNullable<HomePageData["innovationList"]>[number];
type InnovationStatItem = NonNullable<
  HomePageData["innovationStatsList"]
>[number];
type CommunityListItem = NonNullable<HomePageData["communityList"]>[number];
type CommunityStatItem = NonNullable<
  HomePageData["communityStatsList"]
>[number];
type EventListItem = NonNullable<HomePageData["eventsList"]>[number];
type MembershipPlanItem = NonNullable<HomePageData["membershipsPlans"]>[number];
type BannerData = HomePageData["servicesBanner"];
type LocalizedValue =
  | Record<string, string | undefined>
  | string
  | null
  | undefined;

const DEFAULT_PRIMARY_COLOR = "#AE3437";
const MEMBERSHIP_ACCENTS = ["#AE3437", "#C9862E", "#6C7CF0"] as const;

function resolveLocalizedValue(value: LocalizedValue, locale: string) {
  if (!value) return "";
  if (typeof value === "string") return value;
  if (Array.isArray(value)) {
    const stringValue = value.find((item) => typeof item === "string");
    if (typeof stringValue === "string") return stringValue;
    const objectValue = value.find(
      (item) => item && typeof item === "object",
    ) as Record<string, string | undefined> | undefined;
    return objectValue?.[locale] ?? objectValue?.en ?? "";
  }
  return value[locale] ?? value.en ?? "";
}

function resolveLocalizedList(
  items: Array<LocalizedValue> | null | undefined,
  locale: string,
) {
  if (!items?.length) return [];
  return items
    .map((item) => resolveLocalizedValue(item, locale))
    .filter(Boolean);
}

function resolveBannerContent(banner: BannerData, locale: string) {
  const title = resolveLocalizedValue(banner?.title as LocalizedValue, locale);
  const subtitle = resolveLocalizedValue(
    banner?.subtitle as LocalizedValue,
    locale,
  );
  const description = resolveLocalizedValue(
    banner?.description as LocalizedValue,
    locale,
  );
  return {
    title: title || undefined,
    subtitle: subtitle || undefined,
    description: description || undefined,
  };
}

function getImageUrl(image: unknown, width = 1400, height = 900) {
  const url = image ? urlFor(image).width(width).height(height).url() : null;
  return url ?? "";
}

function slugify(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");
}

function mapServices(
  items: ServicesListItem[] | null | undefined,
  locale: string,
): ServiceType[] {
  if (!items?.length) return [];
  return items.map((service) => {
    const title =
      resolveLocalizedValue(service?.title as LocalizedValue, locale) ||
      "Service";
    const slug = slugify(title);
    const subtitle =
      resolveLocalizedValue(service?.subtitle as LocalizedValue, locale) || "";
    const description =
      resolveLocalizedValue(service?.description as LocalizedValue, locale) ||
      "";
    const tags = resolveLocalizedList(
      service?.tags as Array<LocalizedValue> | undefined,
      locale,
    );
    const stats = (service?.stats ?? []).map((stat) => ({
      title: resolveLocalizedValue(stat?.title as LocalizedValue, locale),
      subtitle: resolveLocalizedValue(stat?.subtitle as LocalizedValue, locale),
    }));
    const features = resolveLocalizedList(
      service?.features as Array<LocalizedValue> | undefined,
      locale,
    );

    return {
      title,
      slug,
      subtitle,
      description,
      tags,
      image: service?.image ? getImageUrl(service.image) : "",
      icon: (service?.icon as IconName) ?? "sparkles",
      stats,
      featuresTitle:
        resolveLocalizedValue(
          service?.featuresTitle as LocalizedValue,
          locale,
        ) || "",
      features,
    };
  });
}

function mapScaleItems(
  items: ScaleListItem[] | null | undefined,
  locale: string,
): ScaleItemType[] {
  if (!items?.length) return [];
  return items.map((item) => {
    const tags = resolveLocalizedList(
      item?.tags as Array<LocalizedValue> | undefined,
      locale,
    );
    return {
      title:
        resolveLocalizedValue(item?.title as LocalizedValue, locale) || "Scale",
      subtitle:
        resolveLocalizedValue(item?.subtitle as LocalizedValue, locale) || "",
      description:
        resolveLocalizedValue(item?.description as LocalizedValue, locale) ||
        "",
      icon: (item?.icon as IconName) ?? "sparkles",
      tags,
      metric: "",
      primaryColor: item?.primaryColor ?? DEFAULT_PRIMARY_COLOR,
    };
  });
}

function mapInnovationItems(
  items: InnovationListItem[] | null | undefined,
  locale: string,
): InnovationItemType[] {
  if (!items?.length) return [];
  return items.map((item) => {
    const tags = resolveLocalizedList(
      item?.tags as Array<LocalizedValue> | undefined,
      locale,
    );
    return {
      title:
        resolveLocalizedValue(item?.title as LocalizedValue, locale) ||
        "Innovation",
      subtitle:
        resolveLocalizedValue(item?.subtitle as LocalizedValue, locale) || "",
      description:
        resolveLocalizedValue(item?.description as LocalizedValue, locale) ||
        "",
      icon: (item?.icon as IconName) ?? "sparkles",
      primaryColor: item?.primaryColor ?? DEFAULT_PRIMARY_COLOR,
      tag: tags[0] ?? "",
    };
  });
}

function mapInnovationStats(
  items: InnovationStatItem[] | null | undefined,
  locale: string,
): InnovationStatType[] {
  if (!items?.length) return [];
  return items.map((item) => {
    return {
      title:
        resolveLocalizedValue(item?.title as LocalizedValue, locale) ||
        "Metric",
      subtitle:
        resolveLocalizedValue(item?.subtitle as LocalizedValue, locale) || "",
      icon: (item?.icon as IconName) ?? "sparkles",
    };
  });
}

function mapCommunityItems(
  items: CommunityListItem[] | null | undefined,
  locale: string,
): CommunityItemType[] {
  if (!items?.length) return [];
  return items.map((item) => {
    return {
      title:
        resolveLocalizedValue(item?.title as LocalizedValue, locale) ||
        "Community",
      subtitle:
        resolveLocalizedValue(item?.subtitle as LocalizedValue, locale) || "",
      description:
        resolveLocalizedValue(item?.description as LocalizedValue, locale) ||
        "",
      icon: (item?.icon as IconName) ?? "sparkles",
      primaryColor: item?.primaryColor ?? DEFAULT_PRIMARY_COLOR,
    };
  });
}

function mapCommunityStats(
  items: CommunityStatItem[] | null | undefined,
  locale: string,
): CommunityStat[] {
  if (!items?.length) return [];
  return items.map((item) => {
    return {
      title:
        resolveLocalizedValue(item?.title as LocalizedValue, locale) ||
        "Metric",
      subtitle:
        resolveLocalizedValue(item?.subtitle as LocalizedValue, locale) || "",
      icon: (item?.icon as IconName) ?? "sparkles",
    };
  });
}

function formatDate(value: string | null | undefined, locale: string) {
  if (!value) return "";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return new Intl.DateTimeFormat(locale, { dateStyle: "medium" }).format(date);
}

function formatTime(value: string | null | undefined, locale: string) {
  if (!value) return "TBA";
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;
  return new Intl.DateTimeFormat(locale, { timeStyle: "short" }).format(date);
}

function mapEvents(
  items: EventListItem[] | null | undefined,
  locale: string,
): EventItemType[] {
  if (!items?.length) return [];
  return items.map((event) => {
    const tags = resolveLocalizedList(
      event?.tags as Array<LocalizedValue> | undefined,
      locale,
    );
    const date = formatDate(event?.date ?? "", locale);
    const hasTime = Boolean(event?.date && event.date.includes("T"));
    const time = hasTime
      ? formatTime(event?.date ?? "", locale)
      : event?.endDate
        ? formatTime(event?.endDate, locale)
        : "TBA";
    return {
      title:
        resolveLocalizedValue(event?.title as LocalizedValue, locale) ||
        "Event",
      subtitle:
        resolveLocalizedValue(event?.location as LocalizedValue, locale) || "",
      description:
        resolveLocalizedValue(event?.description as LocalizedValue, locale) ||
        "",
      image: event?.image ? getImageUrl(event.image, 1200, 800) : "",
      tag: tags[0] ?? "",
      date: date || "",
      time,
    };
  });
}

function mapMembershipPlans(
  items: MembershipPlanItem[] | null | undefined,
  locale: string,
): MembershipPlanType[] {
  if (!items?.length) return [];
  const sorted = [...items].sort((a, b) => (a?.order ?? 0) - (b?.order ?? 0));
  return sorted.map((plan, index) => {
    const features =
      plan?.features
        ?.map((feature) =>
          resolveLocalizedValue(feature?.feature as LocalizedValue, locale),
        )
        .filter(Boolean) ?? [];
    return {
      title:
        resolveLocalizedValue(plan?.name as LocalizedValue, locale) ||
        "Membership",
      subtitle:
        resolveLocalizedValue(plan?.subtitle as LocalizedValue, locale) || "",
      description:
        resolveLocalizedValue(plan?.description as LocalizedValue, locale) ||
        "",
      icon: (plan?.icon as IconName) ?? "sparkles",
      features,
      accent:
        MEMBERSHIP_ACCENTS[index % MEMBERSHIP_ACCENTS.length] ??
        DEFAULT_PRIMARY_COLOR,
    };
  });
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  const homePageData = await sanityFetch({
    query: HOME_PAGE_QUERY,
    params: { locale },
  });

  const openGraphImage = resolveOpenGraphImage(homePageData.seo.ogImage);
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
    title: homePageData.seo.title,
    description: homePageData.seo.description,
    openGraph: {
      title: homePageData.seo.ogTitle,
      description: homePageData.seo.ogDescription,
      images,
    },
  };
}

interface HomePageProps {
  params: Promise<{ locale: string }>;
}

export default async function HomePage({ params }: HomePageProps) {
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
    servicesList,
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
    eventsList,
    // MEMBERSHIPS
    membershipsAnnoc,
    membershipsTitle = "MEMBERSHIP EXCELLENCE",
    membershipsSubtitle = "Choose your path to luxury wellness. Each membership is crafted to deliver exceptional value and exclusive experiences in Azerbaijan's premier destination.",
    membershipsPlans,
    membershipsBanner,
    // CONTACT
    contactTitle = "Get In Touch",
    contactSubtitle = "Ready to begin your luxury wellness journey? Contact us today and discover what makes Crown Wellness Club Azerbaijan's premier destination.",
  } = homePageData;

  const heroTitleText = heroTitle ?? "Premium Fitness & Wellness";
  const heroSubtitleText =
    heroSubtitle ??
    "Elevate your lifestyle with world-class facilities, expert trainers, and a community dedicated to your transformation.";
  const servicesTitleText = servicesTitle ?? "Premium Experiences";
  const servicesSubtitleText =
    servicesSubtitle ??
    `Six distinct zones of luxury, each crafted to deliver world-class experiences while honoring Azerbaijan's cultural values.`;
  const scaleTitleText = scaleTitle ?? "Impressive Scale";
  const scaleSubtitleText =
    scaleSubtitle ??
    "First interactive fitness in Azerbaijan luxury wellness club sets unprecedented standards with world-class facilities and cultural excellence.";
  const innovationTitleText = innovationTitle ?? "INNOVATION & TECHNOLOGY";
  const innovationSubtitleText =
    innovationSubtitle ??
    "Experience the future of wellness with cutting-edge technology that personalizes your journey, enhances your performance, and ensures your safety at every step.";
  const communityTitleText = communityTitle ?? "COMMUNITY & LIFESTYLE";
  const communitySubtitleText =
    communitySubtitle ??
    "Join a vibrant community of wellness enthusiasts where connections are made, friendships are formed, and healthy lifestyles are celebrated together in an atmosphere of cultural respect and shared goals.";
  const eventsTitleText = eventsTitle ?? "Upcoming Events";
  const eventsSubtitleText =
    eventsSubtitle ??
    "Join our exciting upcoming events and be part of the Crown Wellness community experience.";
  const membershipsTitleText = membershipsTitle ?? "MEMBERSHIP EXCELLENCE";
  const membershipsSubtitleText =
    membershipsSubtitle ??
    "Choose your path to luxury wellness. Each membership is crafted to deliver exceptional value and exclusive experiences in Azerbaijan's premier destination.";
  const membershipsAnnocText = membershipsAnnoc ?? undefined;
  const contactTitleText = contactTitle ?? "Get In Touch";
  const contactSubtitleText =
    contactSubtitle ??
    "Ready to begin your luxury wellness journey? Contact us today and discover what makes Crown Wellness Club Azerbaijan's premier destination.";

  const servicesItems = mapServices(servicesList, locale);
  const scaleItemsData = mapScaleItems(scaleList, locale);
  const innovationItemsData = mapInnovationItems(innovationList, locale);
  const innovationStatsData = mapInnovationStats(innovationStatsList, locale);
  const communityItemsData = mapCommunityItems(communityList, locale);
  const communityStatsData = mapCommunityStats(communityStatsList, locale);
  const eventsItemsData = mapEvents(eventsList, locale);
  const membershipPlansData = mapMembershipPlans(membershipsPlans, locale);

  const servicesBannerContent = resolveBannerContent(servicesBanner, locale);
  const scaleBannerContent = resolveBannerContent(scaleBanner, locale);
  const innovationBannerContent = resolveBannerContent(
    innovationBanner,
    locale,
  );
  const membershipsBannerContent = resolveBannerContent(
    membershipsBanner,
    locale,
  );

  return (
    <div>
      <HeroSection
        title={heroTitleText}
        subtitle={heroSubtitleText}
        bgVideoUrl={bgVideoUrl ?? undefined}
      />
      <ServicesSection
        title={servicesTitleText}
        subtitle={servicesSubtitleText}
        items={servicesItems}
        bannerTitle={servicesBannerContent.title}
        bannerDescription={servicesBannerContent.description}
      />
      <ScaleSection
        title={scaleTitleText}
        subtitle={scaleSubtitleText}
        items={scaleItemsData}
        bannerTitle={scaleBannerContent.title}
        bannerSubtitle={scaleBannerContent.subtitle}
        bannerDescription={scaleBannerContent.description}
      />
      <InnovationSection
        title={innovationTitleText}
        subtitle={innovationSubtitleText}
        items={innovationItemsData}
        stats={innovationStatsData}
        bannerTitle={innovationBannerContent.title}
        bannerDescription={innovationBannerContent.description}
      />
      <CommunitySection
        title={communityTitleText}
        subtitle={communitySubtitleText}
        items={communityItemsData}
        stats={communityStatsData}
      />
      <EventsSection
        title={eventsTitleText}
        subtitle={eventsSubtitleText}
        items={eventsItemsData}
      />
      <MembershipsSection
        title={membershipsTitleText}
        subtitle={membershipsSubtitleText}
        annocText={membershipsAnnocText}
        items={membershipPlansData}
        bannerTitle={membershipsBannerContent.title}
        bannerDescription={membershipsBannerContent.description}
      />
      <ContactSection title={contactTitleText} subtitle={contactSubtitleText} />
    </div>
  );
}
