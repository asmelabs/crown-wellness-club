import { getLocale } from "next-intl/server";
import { sanityFetch } from "@/sanity/lib/client";
import { PRICING_PLANS_QUERY } from "@/sanity/queries/pricing-plans.query";
import type { PRICING_PLANS_QUERYResult } from "@/sanity/types";
import { MembershipPlanItem } from "./membership-plan-item";

interface MembershipPlansProps {
  emptyMessage?: string;
}

export async function MembershipPlans({
  emptyMessage = "No membership plans are available right now. Please check back soon.",
}: MembershipPlansProps) {
  const locale = await getLocale();
  const membershipPlansData = await sanityFetch<PRICING_PLANS_QUERYResult>({
    query: PRICING_PLANS_QUERY,
    params: { locale },
  });

  if (!membershipPlansData || membershipPlansData.length === 0) {
    return (
      <p className="mx-auto max-w-2xl text-center text-sm text-muted-foreground md:text-base">
        {emptyMessage}
      </p>
    );
  }

  return (
    <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {membershipPlansData.map((plan) => (
        <MembershipPlanItem key={plan.slug?.current} plan={plan} />
      ))}
    </div>
  );
}
