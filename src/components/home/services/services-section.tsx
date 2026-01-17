import type { LocalizedValue } from "@/lib/utils";
import type { HOME_PAGE_QUERYResult } from "@/sanity/types";
import { ServiceBanner } from "./services-banner";
import { ServicesHeader } from "./services-header";
import { ServicesList } from "./services-list";

interface ServicesSectionProps {
  title?: LocalizedValue;
  subtitle?: LocalizedValue;
  banner?: NonNullable<HOME_PAGE_QUERYResult>["servicesBanner"] | null;
  emptyMessage?: string;
}

export function ServicesSection({
  title,
  subtitle,
  banner,
  emptyMessage,
}: ServicesSectionProps) {
  return (
    <section id="services" className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <ServicesHeader title={title} subtitle={subtitle} />
        <div className="mt-12 space-y-8">
          <ServicesList emptyMessage={emptyMessage} />
          {banner ? (
            <ServiceBanner
              title={banner.title}
              description={banner.description}
            />
          ) : null}
        </div>
      </div>
    </section>
  );
}
