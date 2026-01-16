import { ServiceBanner } from "./services-banner";
import { ServicesHeader } from "./services-header";
import { ServicesList } from "./services-list";
import type { ServiceType } from "./types";

interface ServicesSectionProps {
  title?: string;
  subtitle?: string;
  items?: ServiceType[];
  bannerTitle?: string;
  bannerDescription?: string;
  emptyMessage?: string;
}

export function ServicesSection({
  title,
  subtitle,
  items = [],
  bannerTitle,
  bannerDescription,
  emptyMessage = "No services are available right now. Please check back soon.",
}: ServicesSectionProps) {
  const hasItems = items.length > 0;
  const hasBanner = Boolean(bannerTitle || bannerDescription);

  return (
    <section id="services" className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <ServicesHeader title={title} subtitle={subtitle} />
        <div className="mt-12 space-y-8">
          {hasItems ? (
            <ServicesList services={items} />
          ) : (
            <p className="mx-auto max-w-2xl text-center text-sm text-muted-foreground md:text-base">
              {emptyMessage}
            </p>
          )}
          {hasBanner ? (
            <ServiceBanner
              title={bannerTitle}
              description={bannerDescription}
            />
          ) : null}
        </div>
      </div>
    </section>
  );
}
