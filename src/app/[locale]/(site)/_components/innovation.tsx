import { DynamicIcon, type IconName } from 'lucide-react/dynamic';
import { Banner } from '@/components/banner';
import { PaintedText } from '@/components/painted-text';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

interface InnovationStat {
  title: string;
  subtitle: string;
  icon: IconName;
}

interface InnovationItem {
  title: string;
  subtitle: string;
  description: string;
  icon: IconName;
  primaryColor: string;
  tag: string;
}

const stats: InnovationStat[] = [
  { title: '99.9%', subtitle: 'System uptime', icon: 'shield-check' },
  { title: '24/7', subtitle: 'Health monitoring', icon: 'heart-pulse' },
  { title: '< 50ms', subtitle: 'Response time', icon: 'bolt' },
  { title: '150+', subtitle: 'Smart sensors', icon: 'radar' },
];

const innovationItems: InnovationItem[] = [
  {
    title: 'AI Personal Coach',
    subtitle: 'Adaptive Training',
    description: 'Real-time coaching that adjusts your plan to match recovery, performance, and goals.',
    icon: 'sparkles',
    primaryColor: '#9B5DE5',
    tag: 'AI',
  },
  {
    title: 'Biometric Integration',
    subtitle: 'Live Insights',
    description: 'Track sleep, readiness, and recovery with seamless wearable and sensor integration.',
    icon: 'activity',
    primaryColor: '#00B4D8',
    tag: 'Wearables',
  },
  {
    title: 'Smart Recovery',
    subtitle: 'Optimized Rest',
    description: 'Personalized recovery protocols powered by thermal, compression, and mobility data.',
    icon: 'heart',
    primaryColor: '#F77F00',
    tag: 'Recovery',
  },
  {
    title: 'Performance Labs',
    subtitle: 'Precision Training',
    description: 'Advanced testing to refine strength, endurance, and athletic efficiency.',
    icon: 'gauge',
    primaryColor: '#00A34A',
    tag: 'Labs',
  },
  {
    title: 'Safety Intelligence',
    subtitle: 'Always Protected',
    description: 'Proactive monitoring and alerts for safer sessions and smarter progress tracking.',
    icon: 'shield',
    primaryColor: '#FF6B6B',
    tag: 'Safety',
  },
  {
    title: 'Immersive Zones',
    subtitle: 'Mind & Focus',
    description: 'Soundscapes, lighting, and climate controls tuned to elevate focus and flow.',
    icon: 'sparkle',
    primaryColor: '#5C7AEA',
    tag: 'Experience',
  },
];

export function Innovation() {
  return (
    <section className='py-16 md:py-24'>
      <div className='mx-auto max-w-7xl px-4'>
        <div className='space-y-4 text-center'>
          <h1 className='text-4xl font-bold md:text-5xl lg:text-6xl'>
            <PaintedText text='INNOVATION & TECHNOLOGY' paintCount='35%' />
          </h1>
          <p className='mx-auto max-w-3xl text-base text-muted-foreground md:text-lg'>
            Experience the future of wellness with cutting-edge technology that personalizes your journey, enhances your
            performance, and ensures your safety at every step.
          </p>
        </div>

        <div className='mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4'>
          {stats.map((stat) => (
            <Card key={stat.title} className='h-full'>
              <CardContent className='flex flex-col items-center gap-3 text-center'>
                <div className='flex size-12 items-center justify-center rounded-full border border-border/60 bg-muted/40'>
                  <DynamicIcon name={stat.icon} className='size-6 text-primary' />
                </div>
                <div className='text-2xl font-semibold text-foreground'>{stat.title}</div>
                <p className='text-sm text-muted-foreground'>{stat.subtitle}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className='mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
          {innovationItems.map((item) => (
            <Card
              key={item.title}
              className='group relative h-full overflow-hidden transition-transform duration-300 hover:scale-105'
              style={{ '--glow': item.primaryColor } as React.CSSProperties}
            >
              <div className='pointer-events-none absolute -inset-10 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100 bg-[radial-gradient(circle_at_top,var(--glow),transparent_60%)]' />
              <CardContent className='relative z-10 flex flex-col items-start gap-4'>
                <div
                  className='flex size-14 items-center justify-center rounded-full text-white shadow-sm'
                  style={{ backgroundColor: item.primaryColor }}
                >
                  <DynamicIcon name={item.icon} className='size-6' />
                </div>
                <div className='space-y-1'>
                  <h3 className='text-xl font-semibold'>{item.title}</h3>
                  <p className='text-sm text-muted-foreground'>
                    <PaintedText text={item.subtitle} paintCount={1} direction='right' />
                  </p>
                </div>
                <Badge variant='default' className='text-white' style={{ backgroundColor: item.primaryColor }}>
                  {item.tag}
                </Badge>
                <p className='text-sm text-muted-foreground'>{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className='mt-12'>
          <Banner
            title={<PaintedText text='Ready to Experience the Future?' paintCount='45%' />}
            titleClassName='text-4xl md:text-5xl -mt-5'
          />
        </div>
      </div>
    </section>
  );
}
