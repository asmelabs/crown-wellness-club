import { CommunitySection } from '@/components/home/community/community-section';
import { ContactSection } from '@/components/home/contact/contact-section';
import { ServicesSection } from '@/components/home/services/services-section';
import { Events } from './_components/events';
import { HomePageHero } from './_components/hero';
import { Innovation } from './_components/innovation';
import { Membership } from './_components/membership';
import { Scale } from './_components/scale';

export default function HomePage() {
  return (
    <div>
      <HomePageHero />
      <ServicesSection />
      <Scale />
      <Innovation />
      <CommunitySection />
      <Events />
      <Membership />
      <ContactSection />
    </div>
  );
}
