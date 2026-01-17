import type { LocalizedValue } from "@/lib/utils";
import type { HOME_PAGE_QUERYResult } from "@/sanity/types";
import { BuildCustomPlan } from "./build-custom-plan";
import { MembershipAnnoc } from "./membership-annoc";
import { MembershipBanner } from "./membership-banner";
import { MembershipHeader } from "./membership-header";
import { MembershipPlans } from "./membership-plans";

interface MembershipsSectionProps {
  title?: LocalizedValue;
  subtitle?: LocalizedValue;
  annoc?: LocalizedValue;
  banner?: NonNullable<HOME_PAGE_QUERYResult>["membershipsBanner"] | null;
  stats?: NonNullable<HOME_PAGE_QUERYResult>["membershipsStats"] | null;
}

export function MembershipsSection({
  title,
  subtitle,
  annoc,
  banner,
  stats,
}: MembershipsSectionProps) {
  return (
    <section id="memberships" className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <MembershipHeader title={title} subtitle={subtitle} />
        <MembershipAnnoc text={annoc} />
        <MembershipPlans />
        <BuildCustomPlan />
        {banner ? (
          <MembershipBanner
            title={banner.title}
            description={banner.description}
            stats={stats}
          />
        ) : null}
      </div>
    </section>
  );
}
