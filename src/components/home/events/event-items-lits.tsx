import { EventCard } from './event-card';
import type { EventItemType } from './types';

export function EventItemsList({ items }: { items: EventItemType[] }) {
  return (
    <div className='mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
      {items.map((event) => (
        <EventCard key={event.title} event={event} />
      ))}
    </div>
  );
}
