import { DynamicIcon, type IconName } from 'lucide-react/dynamic';
import { Banner } from '@/components/banner';
import { LogoIcon } from '@/components/brand/logo';
import { PaintedText } from '@/components/painted-text';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

interface ScaleItemType {
  title: string;
  subtitle: string;
  description: string;
  icon: IconName;
  tags: string[];
  metric: string;
  primaryColor: string;
}

const scaleItems: ScaleItemType[] = [
  {
    title: '800m² Women-Only Space',
    subtitle: 'Private Wellness Wing',
    description:
      'A dedicated sanctuary designed for comfort and cultural respect with discreet amenities and elevated service.',
    icon: 'sparkles',
    tags: ['Privacy'],
    metric: '800m²',
    primaryColor: '#a826de',
  },
  {
    title: '150+ Premium Equipment',
    subtitle: 'Performance Studios',
    description: 'State-of-the-art training zones with elite-grade cardio, strength, and recovery technology.',
    icon: 'dumbbell',
    tags: ['Equipment'],
    metric: '150+',
    primaryColor: '#006fec',
  },
  {
    title: '24/7 Concierge',
    subtitle: 'Always-On Service',
    description: 'Round-the-clock support to curate training schedules, spa bookings, and private sessions.',
    icon: 'shield',
    tags: ['Service'],
    metric: '24/7',
    primaryColor: '#f23e00',
  },
  {
    title: '40+ Weekly Programs',
    subtitle: 'Expert-Led Classes',
    description: 'Signature group experiences and focused training led by world-class coaches.',
    icon: 'star',
    tags: ['Programs'],
    metric: '40+',
    primaryColor: '#00a34a',
  },
];

export function Scale() {
  return (
    <section className='py-16 md:py-24'>
      <div className='mx-auto max-w-7xl px-4'>
        <div className='space-y-4 text-center'>
          <h1 className='text-4xl font-bold md:text-5xl lg:text-6xl'>
            Impressive <span className='text-primary'>Scale</span>
          </h1>
          <p className='mx-auto max-w-3xl text-base text-muted-foreground md:text-lg'>
            First interactive fitness in Azerbaijan luxury wellness club sets unprecedented standards with world-class
            facilities and cultural excellence.
          </p>
        </div>
        <div className='mt-12 space-y-8'>
          <ScaleGrid />
          <ScaleBanner />
        </div>
      </div>
    </section>
  );
}

function ScaleGrid() {
  return (
    <div className='grid gap-6 md:grid-cols-2'>
      {scaleItems.map((item) => (
        <ScaleItem key={item.title} item={item} />
      ))}
    </div>
  );
}

function ScaleItem({ item }: { item: ScaleItemType }) {
  const tag = item.tags[0];

  return (
    <Card
      className='group relative h-full overflow-hidden transition-transform duration-300 hover:scale-105'
      style={{ '--glow': item.primaryColor } as React.CSSProperties}
    >
      <div className='pointer-events-none absolute -inset-10 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100 bg-[radial-gradient(circle_at_top,var(--glow),transparent_60%)]' />
      <CardContent className='relative z-10 flex flex-col items-center justify-center gap-6 text-center'>
        <div
          className='flex size-16 items-center justify-center rounded-full text-white shadow-sm'
          style={{ backgroundColor: item.primaryColor }}
        >
          <DynamicIcon name={item.icon} className='size-7' />
        </div>
        <h3 className='text-2xl font-semibold md:text-3xl' style={{ color: item.primaryColor }}>
          {item.title}
        </h3>
        <p className='text-base text-muted-foreground' style={{ color: item.primaryColor }}>
          <PaintedText text={item.subtitle} paintCount={1} direction='right' className='text-current' />
        </p>
        <Badge variant='default' size='lg' className='text-white' style={{ backgroundColor: item.primaryColor }}>
          {tag}
        </Badge>
        <p className='text-sm text-muted-foreground'>{item.description}</p>
      </CardContent>
    </Card>
  );
}

function ScaleBanner() {
  return (
    <Banner
      header={<LogoIcon className='size-20 text-primary' />}
      title={
        <>
          First interactive fitness in <span className='text-primary'>Azerbaijan</span>
        </>
      }
      subtitle='Luxury Wellness Destination'
      description='Pioneering the future of premium fitness and wellness in Baku with unprecedented luxury, cultural sensitivity, and world-class amenities. Setting new standards that honor both international excellence and local values.'
      titleClassName='text-4xl md:text-5xl'
      subtitleClassName='text-primary text-sm uppercase tracking-[0.3em]'
      descriptionClassName='text-muted-foreground max-w-3xl'
    />
  );
}
