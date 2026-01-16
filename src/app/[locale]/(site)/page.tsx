import { CommunitySection } from '@/components/home/community/community-section';
import { ContactSection } from '@/components/home/contact/contact-section';
import { EventsSection } from '@/components/home/events/events-section';
import { HeroSection } from '@/components/home/hero/hero-section';
import { InnovationSection } from '@/components/home/innovation/innovation-section';
import { MembershipsSection } from '@/components/home/memberships/memberships-section';
import { ScaleSection } from '@/components/home/scale/scale-section';
import { ServicesSection } from '@/components/home/services/services-section';
import { sanityFetch } from '@/sanity/lib/client';
import { resolveOpenGraphImage } from '@/sanity/lib/image';
import { HOME_PAGE_QUERY } from '@/sanity/queries';
import { Metadata } from 'next';
import { getLocale } from 'next-intl/server';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;

  const homePageData = await sanityFetch({
    query: HOME_PAGE_QUERY,
    params: { locale },
  });

  const openGraphImage = resolveOpenGraphImage(homePageData.seo.ogImage);
  const images: NonNullable<Metadata['openGraph']>['images'] = openGraphImage
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

export default async function HomePage() {
  const locale = await getLocale();
  const homePageData = await sanityFetch({
    query: HOME_PAGE_QUERY,
    params: { locale },
  });

  console.dir(homePageData, { depth: null });

  return (
    <div>
      <HeroSection />
      <ServicesSection />
      <ScaleSection />
      <InnovationSection />
      <CommunitySection />
      <EventsSection />
      <MembershipsSection />
      <ContactSection />
    </div>
  );
}
