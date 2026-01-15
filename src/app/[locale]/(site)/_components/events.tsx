import Image from 'next/image';
import { Banner } from '@/components/banner';
import { CTAButton } from '@/components/cta-button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

interface EventItem {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  tag: string;
  date: string;
  time: string;
}

const events: EventItem[] = [
  {
    title: 'Luxury Wellness Night',
    subtitle: 'Members-Only Gathering',
    description: 'An elegant evening of wellness rituals, curated refreshments, and community connections.',
    image: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=1400&auto=format&fit=crop',
    tag: 'Exclusive',
    date: 'Mar 12, 2026',
    time: '7:00 PM',
  },
  {
    title: 'Recovery & Mobility Lab',
    subtitle: 'Expert-Led Workshop',
    description: 'Learn advanced recovery techniques and mobility flows to enhance performance and prevent injuries.',
    image: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?q=80&w=1400&auto=format&fit=crop',
    tag: 'Workshop',
    date: 'Mar 20, 2026',
    time: '6:30 PM',
  },
  {
    title: 'Community Run & Brunch',
    subtitle: 'Fitness & Lifestyle',
    description: 'A guided city run followed by a wellness brunch with like-minded members.',
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1400&auto=format&fit=crop',
    tag: 'Community',
    date: 'Apr 5, 2026',
    time: '9:00 AM',
  },
];

export function Events() {
  return (
    <section className='py-16 md:py-24'>
      <div className='mx-auto max-w-7xl px-4'>
        <div className='space-y-4 text-center'>
          <h1 className='text-4xl font-bold md:text-5xl lg:text-6xl'>Upcoming Events</h1>
          <p className='mx-auto max-w-3xl text-base text-muted-foreground md:text-lg'>
            Join our exciting upcoming events and be part of the Crown Wellness community experience.
          </p>
        </div>

        <div className='mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
          {events.map((event) => (
            <Card key={event.title} className='group overflow-hidden pt-0'>
              <CardHeader className='px-0'>
                <div className='relative overflow-hidden'>
                  <Image
                    src={event.image}
                    alt={event.title}
                    width={900}
                    height={600}
                    className='h-56 w-full object-cover transition-transform duration-500 group-hover:scale-105'
                    priority={false}
                  />
                  <Badge className='absolute left-4 top-4' variant='default'>
                    {event.tag}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className='space-y-3 pt-2'>
                <h3 className='text-xl font-semibold'>{event.title}</h3>
                <p className='text-primary text-sm font-medium uppercase tracking-widest'>{event.subtitle}</p>
                <div className='flex items-center gap-3 text-sm text-muted-foreground'>
                  <span>{event.date}</span>
                  <span className='size-1.5 rounded-full bg-muted-foreground/50' />
                  <span>{event.time}</span>
                </div>
                <p className='text-sm text-muted-foreground'>{event.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className='mt-12'>
          <Banner
            title='Ready to Join Our Community?'
            description="Become part of Azerbaijan's most welcoming wellness community. Connect, grow, and achieve your goals together with us."
            footer={<CTAButton>Join Community</CTAButton>}
            titleClassName='text-4xl md:text-5xl'
            descriptionClassName='text-muted-foreground max-w-3xl'
          />
        </div>
      </div>
    </section>
  );
}
