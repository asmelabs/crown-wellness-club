import { DynamicIcon, type IconName } from 'lucide-react/dynamic';
import { Banner } from '@/components/banner';
import { CTAButton } from '@/components/cta-button';
import { PaintedText } from '@/components/painted-text';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';

interface MembershipPlan {
  title: string;
  subtitle: string;
  description: string;
  icon: IconName;
  features: string[];
  accent: string;
}

const plans: MembershipPlan[] = [
  {
    title: 'Royal Essential',
    subtitle: 'Luxury Entry',
    description: 'A refined foundation with premium amenities, community access, and essential recovery benefits.',
    icon: 'crown',
    features: ['Full club access', 'Wellness lounge', 'Community events', 'Monthly assessment', 'Member-only perks'],
    accent: '#A855F7',
  },
  {
    title: 'Elite Performance',
    subtitle: 'Most Popular',
    description: 'Enhanced training, recovery, and priority services for members seeking peak performance.',
    icon: 'sparkles',
    features: [
      'Priority studio access',
      'Recovery suite credits',
      'Performance testing',
      'Concierge scheduling',
      'VIP community events',
    ],
    accent: '#00B4D8',
  },
  {
    title: 'Founders Circle',
    subtitle: 'Invitation Only',
    description: 'The highest tier with exclusive access, personalized support, and founding member privileges.',
    icon: 'star',
    features: [
      'Private training sessions',
      'Reserved wellness suites',
      'Founder-level events',
      'Dedicated concierge',
      'Priority booking',
    ],
    accent: '#F59E0B',
  },
];

export function Membership() {
  return (
    <section className='py-16 md:py-24'>
      <div className='mx-auto max-w-7xl px-4'>
        <div className='space-y-4 text-center'>
          <h1 className='text-4xl font-bold md:text-5xl lg:text-6xl'>
            <PaintedText text='MEMBERSHIP EXCELLENCE' paintCount='35%' />
          </h1>
          <p className='mx-auto max-w-3xl text-base text-muted-foreground md:text-lg'>
            Choose your path to luxury wellness. Each membership is crafted to deliver exceptional value and exclusive
            experiences in Azerbaijan&apos;s premier destination.
          </p>
        </div>

        <div className='mt-10 flex justify-center'>
          <div className='rounded-full border border-primary/30 bg-primary/10 px-6 py-2 text-sm font-semibold text-primary'>
            Founding Members: Up to 33% OFF First 6 Months
          </div>
        </div>

        <div className='mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3'>
          {plans.map((plan) => (
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
              <div
                className='pointer-events-none absolute inset-x-0 top-0 h-1'
                style={{ backgroundColor: plan.accent }}
              />
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
          ))}
        </div>

        <div className='mt-12 flex justify-center'>
          <div className='rounded-full border border-primary/30 bg-primary/10 px-6 py-3 text-base font-semibold text-primary shadow-sm'>
            Or Build Your Custom Plan
          </div>
        </div>

        <div className='mt-12'>
          <Banner
            header={
              <div className='flex size-16 items-center justify-center rounded-full bg-primary/15 text-primary'>
                <DynamicIcon name='shield-check' className='size-7' />
              </div>
            }
            title='Founding Member Guarantee'
            description="As a founding member of Crown Wellness Club, you're not just joining a fitness facility - you're becoming part of Azerbaijan's premier wellness revolution. Enjoy exclusive benefits, priority access, and the prestige of being among the first to experience luxury redefined."
            titleClassName='text-4xl md:text-5xl'
            descriptionClassName='text-muted-foreground max-w-4xl'
          >
            <div className='mt-6 grid gap-4 sm:grid-cols-3'>
              {[
                { title: '33%', subtitle: 'Off First 6 Months' },
                { title: '3', subtitle: 'Free Personal Training Sessions' },
                { title: 'VIP', subtitle: 'Grand Opening Access' },
              ].map((stat) => (
                <div
                  key={stat.subtitle}
                  className='rounded-2xl border border-border/60 bg-muted/40 px-4 py-4 text-center'
                >
                  <div className='text-2xl font-semibold text-primary'>{stat.title}</div>
                  <div className='text-xs text-muted-foreground'>{stat.subtitle}</div>
                </div>
              ))}
            </div>
          </Banner>
        </div>
      </div>
    </section>
  );
}
