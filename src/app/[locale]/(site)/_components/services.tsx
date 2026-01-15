import { StarIcon, UsersIcon } from 'lucide-react';
import { DynamicIcon, type IconName } from 'lucide-react/dynamic';
import Image from 'next/image';
import { Banner } from '@/components/banner';
import { PaintedText } from '@/components/painted-text';
import { Badge } from '@/components/ui/badge';
import { Card, CardFooter, CardHeader, CardPanel } from '@/components/ui/card';
import { ServiceSheet } from './service-sheet';

const services: Service[] = [
  {
    title: 'Royal Spa',
    slug: 'royal-spa',
    subtitle: 'Restoration & Rituals',
    description: 'Indulge in curated therapies designed to restore balance, elevate recovery, and renew your energy.',
    tags: ['Signature'],
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=1400&auto=format&fit=crop',
    icon: 'sparkles',
    stats: [
      { title: '12', subtitle: 'Treatment Rooms' },
      { title: '45', subtitle: 'Min Sessions' },
      { title: '24/7', subtitle: 'Concierge' },
    ],
    featuresTitle: 'Highlights',
    features: ['Thermal suites', 'Private rituals', 'Aromatherapy', 'Recovery lounge', 'Expert therapists'],
  },
  {
    title: 'Elite Fitness',
    slug: 'elite-fitness',
    subtitle: 'Performance & Precision',
    description: 'State-of-the-art equipment, performance training, and personalized coaching to reach peak potential.',
    tags: ['Performance'],
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1400&auto=format&fit=crop',
    icon: 'dumbbell',
    stats: [
      { title: '150+', subtitle: 'Equipment' },
      { title: '40', subtitle: 'Programs' },
      { title: '1:1', subtitle: 'Coaching' },
    ],
    featuresTitle: 'Highlights',
    features: ['Strength labs', 'Cardio suites', 'HIIT arena', 'Recovery tech', 'Mobility studio'],
  },
  {
    title: 'Aqua Retreat',
    slug: 'aqua-retreat',
    subtitle: 'Flow & Recovery',
    description: 'A serene water experience featuring vitality pools, hydrotherapy, and restorative immersion.',
    tags: ['Wellness'],
    image: 'https://images.unsplash.com/photo-1501117716987-c8e1ecb210f9?q=80&w=1400&auto=format&fit=crop',
    icon: 'waves',
    stats: [
      { title: '28°', subtitle: 'Thermal Pools' },
      { title: '6', subtitle: 'Hydro Zones' },
      { title: '90', subtitle: 'Min Journeys' },
    ],
    featuresTitle: 'Highlights',
    features: ['Vitality pools', 'Hydrotherapy', 'Cold plunge', 'Sauna suites', 'Aqua lounge'],
  },
];

export function ServicesSection() {
  return (
    <section className='py-16 md:py-24'>
      <div className='mx-auto max-w-7xl px-4'>
        <div className='space-y-5 text-center'>
          <div className='flex items-center justify-center'>
            <StarIcon className='size-12 text-primary' />
          </div>
          <h1 className='text-center text-4xl font-bold md:text-5xl lg:text-6xl'>
            Premium <span className='text-primary'>Experiences</span>
          </h1>
          <p className='mx-auto max-w-3xl text-base text-muted-foreground md:text-lg'>
            Six distinct zones of luxury, each crafted to deliver world-class experiences while honoring Azerbaijan's
            cultural values.
          </p>
        </div>
        <div className='mt-12 space-y-8'>
          <ServicesList services={services} />
          <ServiceBanner />
        </div>
      </div>
    </section>
  );
}

interface Service {
  title: string;
  slug: string;
  subtitle: string;
  description: string;
  tags: string[]; // array but only 1 item
  image: string;
  icon: IconName; // use DynamicIcon from lucide-react/dynamic
  stats: {
    title: string;
    subtitle: string;
  }[]; // 3 items
  featuresTitle: string;
  features: string[]; // min 5, max 8
}

function ServicesList({ services }: { services: Service[] }) {
  return (
    <div className='grid gap-8 md:grid-cols-2 lg:grid-cols-3 items-stretch'>
      {services.map((service) => {
        const [firstWord, ...restWords] = service.title.split(' ');
        const restTitle = restWords.join(' ');

        return (
          <Card
            key={service.slug}
            className='group relative flex h-full flex-col overflow-hidden py-0 transition-shadow duration-300 hover:shadow-primary/30'
          >
            <div className='pointer-events-none absolute -inset-8 z-0 opacity-0 blur-2xl transition-opacity duration-300 bg-primary/20 group-hover:opacity-100' />
            <CardHeader className='relative z-10 px-0'>
              <div className='relative overflow-hidden'>
                <Image
                  src={service.image}
                  alt={service.title}
                  width={900}
                  height={600}
                  className='h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105'
                  priority={false}
                />
                <Badge className='absolute left-4 top-4' variant='default'>
                  {service.tags[0]}
                </Badge>
                <div className='absolute bottom-4 right-4 flex size-12 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-sm'>
                  <DynamicIcon name={service.icon} size={22} />
                </div>
              </div>
            </CardHeader>

            <CardPanel className='relative z-10 flex flex-1 flex-col space-y-3 pt-2'>
              <h2 className='text-2xl font-semibold'>
                <span className='text-primary'>{firstWord}</span>
                {restTitle ? ` ${restTitle}` : ''}
              </h2>
              <p className='text-primary text-sm font-medium uppercase tracking-widest'>{service.subtitle}</p>
              <p className='text-sm text-muted-foreground'>{service.description}</p>

              <div className='grid grid-cols-3 gap-3 pt-2'>
                {service.stats.map((stat) => (
                  <div
                    key={stat.title}
                    className='rounded-lg border border-border/60 bg-muted/40 px-3 py-2 text-center'
                  >
                    <div className='text-lg font-semibold text-foreground'>{stat.title}</div>
                    <div className='text-xs text-muted-foreground'>{stat.subtitle}</div>
                  </div>
                ))}
              </div>
            </CardPanel>

            <CardFooter className='relative z-10 mt-auto justify-center pb-6 pt-2'>
              <ServiceSheet service={service} />
            </CardFooter>
          </Card>
        );
      })}
    </div>
  );
}

function ServiceBanner() {
  return (
    <Banner
      title={
        <PaintedText text='Cultural Excellence & Privacy' />
        // <>
        //   Cultural Excellence <span className='text-primary'>& Privacy</span>
        // </>
      }
      description={
        "Our women's facilities span 800m² of completely private space, designed with deep respect for Azerbaijan's cultural values. Featuring dedicated female trainers, private changing areas, and women-only class schedules, we ensure comfort and modesty without compromising luxury."
      }
      header={<UsersIcon className='size-20 text-primary' />}
    />
  );
}
