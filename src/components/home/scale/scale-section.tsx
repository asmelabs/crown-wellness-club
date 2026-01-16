import { ScaleBanner } from "./scale-banner";
import { ScaleGrid } from "./scale-grid";
import { ScaleHeader } from "./scale-header";
import type { ScaleItemType } from "./types";

interface ScaleSectionProps {
  title?: string;
  subtitle?: string;
  items?: ScaleItemType[];
  bannerTitle?: string;
  bannerSubtitle?: string;
  bannerDescription?: string;
  emptyMessage?: string;
}

export function ScaleSection({
  title,
  subtitle,
  items = [],
  bannerTitle,
  bannerSubtitle,
  bannerDescription,
  emptyMessage = "No scale highlights are available right now. Please check back soon.",
}: ScaleSectionProps) {
  const hasItems = items.length > 0;
  const hasBanner = Boolean(bannerTitle || bannerSubtitle || bannerDescription);

  return (
    <section id="impressive-scale" className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <ScaleHeader title={title} subtitle={subtitle} />
        <div className="mt-12 space-y-8">
          {hasItems ? (
            <ScaleGrid items={items} />
          ) : (
            <p className="mx-auto max-w-2xl text-center text-sm text-muted-foreground md:text-base">
              {emptyMessage}
            </p>
          )}
          {hasBanner ? (
            <ScaleBanner
              title={bannerTitle}
              subtitle={bannerSubtitle}
              description={bannerDescription}
            />
          ) : null}
        </div>
      </div>
    </section>
  );
}
