import { BuildCustomPlan } from "./build-custom-plan";
import { MembershipAnnoc } from "./membership-annoc";
import { MembershipBanner } from "./membership-banner";
import { MembershipHeader } from "./membership-header";
import { MembershipPlans } from "./membership-plans";
import type { MembershipPlanType } from "./types";

interface MembershipsSectionProps {
  title?: string;
  subtitle?: string;
  items?: MembershipPlanType[];
  bannerTitle?: string;
  bannerDescription?: string;
  annocText?: string;
}

export function MembershipsSection({
  title,
  subtitle,
  items = [],
  bannerTitle,
  bannerDescription,
  annocText,
}: MembershipsSectionProps) {
  const hasItems = items.length > 0;
  const hasBanner = Boolean(bannerTitle || bannerDescription);

  return (
    <section id="memberships" className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <MembershipHeader title={title} subtitle={subtitle} />
        <MembershipAnnoc text={annocText} />
        {hasItems ? (
          <MembershipPlans items={items} />
        ) : (
          <p className="mx-auto mt-12 max-w-2xl text-center text-sm text-muted-foreground md:text-base">
            No membership plans are available right now. Please check back soon.
          </p>
        )}
        <BuildCustomPlan />
        {hasBanner ? (
          <MembershipBanner
            title={bannerTitle}
            description={bannerDescription}
          />
        ) : null}
      </div>
    </section>
  );
}
