import { ServiceCard } from './service-card';
import type { Service } from './types';

interface ServicesListProps {
  services: Service[];
}

export function ServicesList({ services }: ServicesListProps) {
  return (
    <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3 items-stretch'>
      {services.map((service) => (
        <ServiceCard key={service.slug} service={service} />
      ))}
    </div>
  );
}
