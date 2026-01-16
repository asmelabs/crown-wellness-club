import { services } from './data';
import { ServiceBanner } from './services-banner';
import { ServicesHeader } from './services-header';
import { ServicesList } from './services-list';

export function ServicesSection() {
  return (
    <section id='services' className='py-16 md:py-24'>
      <div className='mx-auto max-w-7xl px-4'>
        <ServicesHeader />
        <div className='mt-12 space-y-8'>
          <ServicesList services={services} />
          <ServiceBanner />
        </div>
      </div>
    </section>
  );
}
