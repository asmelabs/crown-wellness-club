import { CommunitySection } from '@/components/home/community/community-section';
import { ContactSection } from '@/components/home/contact/contact-section';
import { EventsSection } from '@/components/home/events/events-section';
import { HeroSection } from '@/components/home/hero/hero-section';
import { InnovationSection } from '@/components/home/innovation/innovation-section';
import { MembershipsSection } from '@/components/home/memberships/memberships-section';
import { ScaleSection } from '@/components/home/scale/scale-section';
import { ServicesSection } from '@/components/home/services/services-section';

export default function HomePage() {
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
