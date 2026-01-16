import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import type { EventItemType } from './types';

export function EventCard({ event }: { event: EventItemType }) {
  return (
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
  );
}
