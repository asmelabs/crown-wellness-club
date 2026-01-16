import { DynamicIcon } from 'lucide-react/dynamic';
import { CTAButton } from '@/components/cta-button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import type { MembershipPlanType } from './types';

export function MembershipPlanItem({ plan }: { plan: MembershipPlanType }) {
  return (
    <Card
      key={plan.title}
      className='group relative overflow-hidden border border-border/60 bg-linear-to-br from-background via-background to-muted/40 transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/10'
    >
      <div
        className='pointer-events-none absolute inset-0 opacity-70'
        style={{
          background:
            `radial-gradient(60% 60% at 0% 0%, ${plan.accent}33, transparent 60%),` +
            `radial-gradient(60% 60% at 100% 0%, ${plan.accent}22, transparent 60%)`,
        }}
      />
      <div className='pointer-events-none absolute inset-x-0 top-0 h-1' style={{ backgroundColor: plan.accent }} />
      <CardHeader className='space-y-3'>
        <div className='flex items-center justify-between'>
          <div
            className='flex size-12 items-center justify-center rounded-full text-white shadow-sm'
            style={{ backgroundColor: plan.accent }}
          >
            <DynamicIcon name={plan.icon} className='size-6' />
          </div>
          <Badge variant='default' className='text-white' style={{ backgroundColor: plan.accent }}>
            {plan.subtitle}
          </Badge>
        </div>
        <h3 className='text-3xl font-semibold'>{plan.title}</h3>
        <p className='text-base text-muted-foreground'>{plan.description}</p>
      </CardHeader>
      <CardContent className='space-y-5'>
        <CTAButton className='w-full' containerClassName='w-full'>
          Get Started
        </CTAButton>
        <div className='space-y-2'>
          {plan.features.map((feature) => (
            <div key={feature} className='flex items-start gap-2 text-sm text-muted-foreground'>
              <span className='mt-1 size-1.5 rounded-full' style={{ backgroundColor: plan.accent }} />
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </CardContent>
      <CardFooter />
    </Card>
  );
}
