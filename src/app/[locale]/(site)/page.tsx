import { CommunitySection } from '@/components/home/community/community-section';
import { ContactSection } from '@/components/home/contact/contact-section';
import { HeroSection } from '@/components/home/hero/hero-section';
import { ServicesSection } from '@/components/home/services/services-section';
import { Events } from './_components/events';
import { Innovation } from './_components/innovation';
import { Membership } from './_components/membership';
import { Scale } from './_components/scale';

export default function HomePage() {
  return (
    <div>
      <HeroSection />
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
