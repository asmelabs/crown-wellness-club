import { eventsItems } from './data';
import { EventBanner } from './event-banner';
import { EventCard } from './event-card';
import { EventHeader } from './event-header';

export function EventsSection() {
  return (
    <section id='events' className='py-16 md:py-24'>
      <div className='mx-auto max-w-7xl px-4'>
        <EventHeader />

        <div className='mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
          {eventsItems.map((event) => (
            <EventCard key={event.title} event={event} />
          ))}
        </div>

        <EventBanner />
      </div>
    </section>
  );
}
