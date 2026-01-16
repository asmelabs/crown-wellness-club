import { MembershipPlanItem } from './membership-plan-item';
import type { MembershipPlanType } from './types';

export function MembershipPlans({ items }: { items: MembershipPlanType[] }) {
  return (
    <div className='mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
      {items.map((plan) => (
        <MembershipPlanItem key={plan.title} plan={plan} />
      ))}
    </div>
  );
}
