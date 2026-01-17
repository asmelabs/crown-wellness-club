import { DynamicIcon } from "lucide-react/dynamic";
import { Banner } from "@/components/banner";
import { LocalizedText } from "@/components/localized-text";
import type { LocalizedValue } from "@/lib/utils";
import type { HOME_PAGE_QUERYResult } from "@/sanity/types";

interface MembershipBannerProps {
  title?: LocalizedValue;
  description?: LocalizedValue;
  stats?: NonNullable<HOME_PAGE_QUERYResult>["membershipsStats"] | null;
}

export function MembershipBanner({
  title,
  description,
  stats,
}: MembershipBannerProps) {
  console.log(stats);
  return (
    <Banner
      cardClassName="mt-12"
      header={
        <div className="flex size-16 items-center justify-center rounded-full bg-primary/15 text-primary">
          <DynamicIcon name="shield-check" className="size-7" />
        </div>
      }
      title={title}
      description={description}
      titleClassName="text-4xl md:text-5xl"
      descriptionClassName="text-muted-foreground max-w-4xl"
    >
      <MembershipBannerStats stats={stats} />
    </Banner>
  );
}

function MembershipBannerStat({
  stat,
}: {
  stat: NonNullable<
    NonNullable<HOME_PAGE_QUERYResult>["membershipsStats"]
  >[number];
}) {
  return (
    <div
      key={stat._key}
      className="rounded-2xl border border-border/60 bg-muted/40 px-4 py-4 text-center"
    >
      <div className="text-2xl font-semibold text-primary">{stat.value}</div>
      <div className="text-xs text-muted-foreground">
        <LocalizedText text={stat.label} />
      </div>
    </div>
  );
}

function MembershipBannerStats({
  stats,
}: {
  stats?: NonNullable<HOME_PAGE_QUERYResult>["membershipsStats"] | null;
}) {
  if (!stats) return null;

  return (
    <div className="mt-6 grid gap-4 sm:grid-cols-3">
      {stats.map((stat) => (
        <MembershipBannerStat key={stat._key} stat={stat} />
      ))}
    </div>
  );
}
