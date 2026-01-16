import { ServicesSection } from '@/components/home/services/services-section';
import { Community } from './_components/community';
import { Contact } from './_components/contact';
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
      <Community />
      <Events />
      <Membership />
      <Contact />
    </div>
  );
}
