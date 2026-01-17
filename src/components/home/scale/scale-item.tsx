import { DynamicIcon, type IconName } from "lucide-react/dynamic";
import { LocalizedText } from "@/components/localized-text";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import type { HOME_PAGE_QUERYResult } from "@/sanity/types";

interface ScaleItemProps {
  item: NonNullable<NonNullable<HOME_PAGE_QUERYResult>["scaleList"]>[number];
}

export function ScaleItem({ item }: ScaleItemProps) {
  const tag =
    item.tags && item.tags.length > 0 && item.tags[0]
      ? item.tags[0]
      : undefined;
  const primaryColor = item.primaryColor?.value
    ? item.primaryColor.value
    : "#000000";

  return (
    <Card
      className="group relative h-full overflow-hidden transition-transform duration-300 hover:scale-105"
      style={{ "--glow": primaryColor } as React.CSSProperties}
    >
      <div className="pointer-events-none absolute -inset-10 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100 bg-[radial-gradient(circle_at_top,var(--glow),transparent_60%)]" />
      <CardContent className="relative z-10 flex flex-col items-center justify-center gap-6 text-center">
        <div
          className="flex size-16 items-center justify-center rounded-full text-white shadow-sm"
          style={{ backgroundColor: primaryColor }}
        >
          <DynamicIcon name={item.icon as IconName} className="size-7" />
        </div>
        <h3
          className="text-2xl font-semibold md:text-3xl"
          style={{ color: primaryColor }}
        >
          <LocalizedText text={item.title} />
        </h3>
        <p
          className="text-base text-muted-foreground"
          style={{ color: primaryColor }}
        >
          <LocalizedText
            text={item.subtitle}
            enablePaintedText={true}
            className="text-current"
          />
        </p>
        <Badge
          variant="default"
          size="lg"
          className="text-white"
          style={{ backgroundColor: primaryColor }}
        >
          <LocalizedText text={tag} />
        </Badge>
        <p className="text-sm text-muted-foreground">
          <LocalizedText text={item.description} />
        </p>
      </CardContent>
    </Card>
  );
}
