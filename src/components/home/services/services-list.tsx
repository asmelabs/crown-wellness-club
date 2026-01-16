import { ServiceCard } from "./service-card";
import type { ServiceType } from "./types";

interface ServicesListProps {
  services: ServiceType[];
}

export function ServicesList({ services }: ServicesListProps) {
  if (!services.length) return null;

  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 items-stretch">
      {services.map((service) => (
        <ServiceCard key={service.slug} service={service} />
      ))}
    </div>
  );
}
