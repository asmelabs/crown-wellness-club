import { DynamicIcon, type IconName } from "lucide-react/dynamic";
import Image from "next/image";
import { Suspense } from "react";
import { PaintedText } from "@/components/painted-text";
import { Badge } from "@/components/ui/badge";
import { Card, CardFooter, CardHeader, CardPanel } from "@/components/ui/card";
import { urlFor } from "@/sanity/lib/image";
import type { SERVICES_QUERYResult } from "@/sanity/types";
import { ServiceSheet } from "./service-sheet";

interface ServiceCardProps {
  service: SERVICES_QUERYResult[number];
}

export function ServiceCard({ service }: ServiceCardProps) {
  const imageUrl = service?.image ? urlFor(service.image).url() : null;
  const tag = service?.tags?.[0]?.tag ?? null;
  const slug = service?.slug!;

  return (
    <Card
      key={slug}
      className="group relative flex h-full flex-col overflow-hidden py-0 transition-shadow duration-300 hover:shadow-primary/30"
    >
      <div className="pointer-events-none absolute -inset-8 z-0 opacity-0 blur-2xl transition-opacity duration-300 bg-primary/20 group-hover:opacity-100" />
      <CardHeader className="relative z-10 px-0">
        <div className="relative overflow-hidden">
          {imageUrl && (
            <Image
              src={imageUrl}
              alt={service.title ?? "Service Image"}
              width={900}
              height={600}
              className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105"
              priority={false}
            />
          )}
          {tag && (
            <Badge className="absolute left-4 top-4" variant="default">
              {tag}
            </Badge>
          )}
          {service.icon && (
            <div className="absolute bottom-4 right-4 flex size-12 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-sm">
              <DynamicIcon name={service.icon as IconName} size={22} />
            </div>
          )}
        </div>
      </CardHeader>

      <CardPanel className="relative z-10 flex flex-1 flex-col space-y-3 pt-2">
        {service.title && (
          <h2 className="text-2xl font-semibold">
            <PaintedText
              text={service.title}
              paintCount={1}
              direction="right"
              className="text-current"
            />
          </h2>
        )}
        {service.subtitle && (
          <p className="text-primary text-sm font-medium uppercase tracking-widest">
            {service.subtitle}
          </p>
        )}
        {service.description && (
          <p className="text-sm text-muted-foreground">{service.description}</p>
        )}

        {service.stats.length > 0 && (
          <div className="grid grid-cols-3 gap-3 pt-2">
            {service.stats.map((stat) => (
              <div
                key={stat.title}
                className="rounded-lg border border-border/60 bg-muted/40 px-3 py-2 text-center"
              >
                <div className="text-lg font-semibold text-foreground">
                  {stat.title}
                </div>
                <div className="text-xs text-muted-foreground">
                  {stat.subtitle}
                </div>
              </div>
            ))}
          </div>
        )}
      </CardPanel>

      <CardFooter className="relative z-10 mt-auto justify-center pb-6 pt-2">
        <Suspense>
          <ServiceSheet service={service} />
        </Suspense>
      </CardFooter>
    </Card>
  );
}
