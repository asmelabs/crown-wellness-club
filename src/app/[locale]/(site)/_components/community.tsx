import { DynamicIcon, type IconName } from 'lucide-react/dynamic';
import { PaintedText } from '@/components/painted-text';
import { Card, CardContent } from '@/components/ui/card';

interface CommunityStat {
  title: string;
  subtitle: string;
  icon: IconName;
}

interface CommunityItem {
  title: string;
  subtitle: string;
  description: string;
  icon: IconName;
  primaryColor: string;
}

const stats: CommunityStat[] = [
  { title: '2,500+', subtitle: 'Active Members', icon: 'users' },
  { title: '150+', subtitle: 'Monthly Events', icon: 'calendar' },
  { title: '98%', subtitle: 'Satisfaction Rate', icon: 'badge-check' },
  { title: '24/7', subtitle: 'Community Support', icon: 'message-circle' },
];

const communityItems: CommunityItem[] = [
  {
    title: 'Social Events & Networking',
    subtitle: 'Connect & Grow',
    description: 'Exclusive gatherings that bring members together through shared goals and meaningful connections.',
    icon: 'sparkles',
    primaryColor: '#A855F7',
  },
  {
    title: 'Fitness Challenges',
    subtitle: 'Compete & Inspire',
    description: 'Monthly challenges designed to motivate progress, celebrate wins, and elevate performance.',
    icon: 'trophy',
    primaryColor: '#F59E0B',
  },
  {
    title: 'Wellness Workshops',
    subtitle: 'Learn & Thrive',
    description: 'Expert-led sessions covering recovery, nutrition, mindset, and lifestyle optimization.',
    icon: 'book-open',
    primaryColor: '#22C55E',
  },
  {
    title: 'Member Spotlights',
    subtitle: 'Celebrate Stories',
    description: 'Highlighting member journeys and achievements to inspire the entire community.',
    icon: 'star',
    primaryColor: '#38BDF8',
  },
  {
    title: 'Cultural Celebrations',
    subtitle: 'Honor Traditions',
    description: 'Events that reflect local culture, values, and shared traditions in a respectful environment.',
    icon: 'flower-2',
    primaryColor: '#FB7185',
  },
  {
    title: 'Community Support',
    subtitle: 'Always Here',
    description: 'Dedicated support and mentorship to keep you motivated, accountable, and supported.',
    icon: 'heart-handshake',
    primaryColor: '#6366F1',
  },
];

export function Community() {
  return (
    <section className='py-16 md:py-24'>
      <div className='mx-auto max-w-7xl px-4'>
        <div className='space-y-4 text-center'>
          <h1 className='text-4xl font-bold md:text-5xl lg:text-6xl'>
            <PaintedText text='COMMUNITY & LIFESTYLE' paintCount='35%' />
          </h1>
          <p className='mx-auto max-w-3xl text-base text-muted-foreground md:text-lg'>
            Join a vibrant community of wellness enthusiasts where connections are made, friendships are formed, and
            healthy lifestyles are celebrated together in an atmosphere of cultural respect and shared goals.
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
          {communityItems.map((item) => (
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
                <p className='text-sm text-muted-foreground'>{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
