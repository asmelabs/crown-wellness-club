"use client";

import Image from "next/image";
import { parseAsString, useQueryState } from "nuqs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetFooter,
  SheetHeader,
  SheetPanel,
  SheetPopup,
  SheetTrigger,
} from "@/components/ui/sheet";
import { urlFor } from "@/sanity/lib/image";
import type { SERVICES_QUERYResult } from "@/sanity/types";

interface ServiceSheetProps {
  service: SERVICES_QUERYResult[number];
}

export function ServiceSheet({ service }: ServiceSheetProps) {
  const [openedServiceSlug, setOpenedServiceSlug] = useQueryState(
    "opened-service",
    parseAsString,
  );
  console.log(service);

  const imageUrl = service.image ? urlFor(service.image).url() : null;
  const tag = service.tags?.[0]?.tag ?? null;

  const slug = service.slug!;

  console.log(slug);

  return (
    <Sheet
      open={openedServiceSlug === slug}
      onOpenChange={(open) => setOpenedServiceSlug(open ? slug : null)}
    >
      <SheetTrigger
        render={<Button className="w-full" variant="default"></Button>}
      >
        Explore Experience
      </SheetTrigger>
      <SheetPopup inset side="top" showCloseButton>
        <SheetHeader className="pb-2"></SheetHeader>
        <SheetPanel className="pt-2">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_1fr]">
            {imageUrl && (
              <div className="relative min-h-[420px] overflow-hidden rounded-2xl">
                <Image
                  src={imageUrl}
                  alt={service.title ?? "Service Image"}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 55vw"
                />
                {tag && (
                  <Badge className="absolute left-4 top-4" variant="default">
                    {tag}
                  </Badge>
                )}
              </div>
            )}

            <div className="flex flex-col gap-5">
              <div className="space-y-2">
                <h2 className="text-3xl font-semibold">{service.title}</h2>
                <p className="text-primary text-sm font-medium uppercase tracking-widest">
                  {service.subtitle}
                </p>
              </div>
              <p className="text-muted-foreground">{service.description}</p>

              <div className="grid grid-cols-3 gap-3">
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

              <div className="space-y-3 pt-2">
                <h3 className="text-sm font-semibold uppercase tracking-widest text-foreground">
                  {service.featuresTitle}
                </h3>
                <ul className="grid gap-2 text-sm text-muted-foreground sm:grid-cols-2">
                  {service.features.map(({ feature }) => (
                    <li key={feature} className="flex items-start gap-2">
                      <span className="mt-1 size-1.5 rounded-full bg-primary" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </SheetPanel>
        <SheetFooter variant="bare"></SheetFooter>
      </SheetPopup>
    </Sheet>
  );
}
