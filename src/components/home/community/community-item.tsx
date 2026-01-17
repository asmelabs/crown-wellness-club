import { LocalizedText } from "@/components/localized-text";
import { SanityIcon } from "@/components/sanity-icon";
import { Card, CardContent } from "@/components/ui/card";
import type { HOME_PAGE_QUERYResult } from "@/sanity/types";

interface CommunityItemProps {
  item: NonNullable<
    NonNullable<HOME_PAGE_QUERYResult>["communityList"]
  >[number];
}

export function CommunityItem({ item }: CommunityItemProps) {
  const primaryColor = item.primaryColor?.value
    ? item.primaryColor.value
    : "#000000";

  return (
    <Card
      className="group relative h-full overflow-hidden transition-transform duration-300 hover:scale-105"
      style={{ "--glow": primaryColor } as React.CSSProperties}
    >
      <div className="pointer-events-none absolute -inset-10 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100 bg-[radial-gradient(circle_at_top,var(--glow),transparent_60%)]" />
      <CardContent className="relative z-10 flex flex-col items-start gap-4">
        <div
          className="flex size-14 items-center justify-center rounded-full text-white shadow-sm"
          style={{ backgroundColor: primaryColor }}
        >
          <SanityIcon icon={item.icon} className="size-6" />
        </div>
        <div className="space-y-1">
          <h3 className="text-xl font-semibold">
            <LocalizedText text={item.title} />
          </h3>
          <p className="text-sm text-muted-foreground">
            <LocalizedText
              text={item.subtitle}
              enablePaintedText={true}
              paintCount={1}
              direction="right"
            />
          </p>
        </div>
        <p className="text-sm text-muted-foreground">
          <LocalizedText text={item.description} />
        </p>
      </CardContent>
    </Card>
  );
}
