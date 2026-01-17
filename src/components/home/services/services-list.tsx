import { getLocale } from "next-intl/server";
import { sanityFetch } from "@/sanity/lib/client";
import { SERVICES_QUERY } from "@/sanity/queries/services-query";
import type { SERVICES_QUERYResult } from "@/sanity/types";
import { ServiceCard } from "./service-card";

interface ServicesListProps {
  emptyMessage?: string;
}

export async function ServicesList({
  emptyMessage = "No services are available right now. Please check back soon.",
}: ServicesListProps) {
  const locale = await getLocale();
  const servicesData = await sanityFetch<SERVICES_QUERYResult>({
    query: SERVICES_QUERY,
    params: { locale },
  });

  if (!servicesData || servicesData.length === 0) {
    return (
      <p className="mx-auto max-w-2xl text-center text-sm text-muted-foreground md:text-base">
        {emptyMessage}
      </p>
    );
  }

  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 items-stretch">
      {servicesData.map((service) => (
        <ServiceCard key={service.slug!} service={service} />
      ))}
    </div>
  );
}
