import { format } from "date-fns";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { urlFor } from "@/sanity/lib/image";
import type { EVENTS_QUERYResult } from "@/sanity/types";

interface EventCardProps {
  event: EVENTS_QUERYResult[number];
}

export function EventCard({ event }: EventCardProps) {
  if (!event || !event.slug || !event.title) return null;

  const { title, subtitle, date, description, image, tags } = event;

  const imageUrl = image ? urlFor(image).url() : null;
  const tag = tags?.[0]?.tag ?? null;

  const eventDate = date ? format(new Date(date), "d MMM") : null;
  const eventTime = date ? format(new Date(date), "hh:mm") : null;

  return (
    <Card className="group overflow-hidden pt-0">
      <CardHeader className="px-0">
        {imageUrl && (
          <div className="relative overflow-hidden">
            <Image
              src={imageUrl}
              alt={title}
              width={900}
              height={600}
              className="h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105"
              priority={false}
            />
            {tag && (
              <Badge className="absolute left-4 top-4" variant="default">
                {tag}
              </Badge>
            )}
          </div>
        )}
      </CardHeader>
      <CardContent className="space-y-3 pt-2">
        <h3 className="text-xl font-semibold">{title}</h3>
        {subtitle && (
          <p className="text-primary text-sm font-medium uppercase tracking-widest">
            {subtitle}
          </p>
        )}
        {eventDate && (
          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            <span>{eventDate}</span>
            {eventTime && (
              <>
                <span className="size-1.5 rounded-full bg-muted-foreground/50" />
                <span>{eventTime}</span>
              </>
            )}
          </div>
        )}
        {description && (
          <p className="text-sm text-muted-foreground">{description}</p>
        )}
      </CardContent>
    </Card>
  );
}
