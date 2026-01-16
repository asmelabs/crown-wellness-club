import { DynamicIcon } from "lucide-react/dynamic";
import { Banner } from "@/components/banner";
import { membershipBannerStats } from "./data";
import type { MembershipBannerStatType } from "./types";

interface MembershipBannerProps {
  title?: string;
  description?: string;
}

export function MembershipBanner({
  title,
  description,
}: MembershipBannerProps) {
  const bannerTitle = title ?? "Founding Member Guarantee";
  const bannerDescription =
    description ??
    "As a founding member of Crown Wellness Club, you're not just joining a fitness facility - you're becoming part of Azerbaijan's premier wellness revolution. Enjoy exclusive benefits, priority access, and the prestige of being among the first to experience luxury redefined.";

  return (
    <Banner
      cardClassName="mt-12"
      header={
        <div className="flex size-16 items-center justify-center rounded-full bg-primary/15 text-primary">
          <DynamicIcon name="shield-check" className="size-7" />
        </div>
      }
      title={bannerTitle}
      description={bannerDescription}
      titleClassName="text-4xl md:text-5xl"
      descriptionClassName="text-muted-foreground max-w-4xl"
    >
      <MembershipBannerStats stats={membershipBannerStats} />
    </Banner>
  );
}

function MembershipBannerStat({ stat }: { stat: MembershipBannerStatType }) {
  return (
    <div
      key={stat.subtitle}
      className="rounded-2xl border border-border/60 bg-muted/40 px-4 py-4 text-center"
    >
      <div className="text-2xl font-semibold text-primary">{stat.title}</div>
      <div className="text-xs text-muted-foreground">{stat.subtitle}</div>
    </div>
  );
}

function MembershipBannerStats({
  stats,
}: {
  stats: MembershipBannerStatType[];
}) {
  return (
    <div className="mt-6 grid gap-4 sm:grid-cols-3">
      {stats.map((stat) => (
        <MembershipBannerStat key={stat.subtitle} stat={stat} />
      ))}
    </div>
  );
}
