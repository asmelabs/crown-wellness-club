import { BuildCustomPlan } from './build-custom-plan';
import { plans } from './data';
import { MembershipAnnoc } from './membership-annoc';
import { MembershipBanner } from './membership-banner';
import { MembershipHeader } from './membership-header';
import { MembershipPlans } from './membership-plans';

export function MembershipsSection() {
  return (
    <section id='memberships' className='py-16 md:py-24'>
      <div className='mx-auto max-w-7xl px-4'>
        <MembershipHeader />
        <MembershipAnnoc />
        <MembershipPlans items={plans} />
        <BuildCustomPlan />
        <MembershipBanner />
      </div>
    </section>
  );
}
