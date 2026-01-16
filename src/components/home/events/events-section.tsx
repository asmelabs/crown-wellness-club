import { eventsItems } from './data';
import { EventBanner } from './event-banner';
import { EventHeader } from './event-header';
import { EventItemsList } from './event-items-lits';

export function EventsSection() {
  return (
    <section id='events' className='py-16 md:py-24'>
      <div className='mx-auto max-w-7xl px-4'>
        <EventHeader />
        <EventItemsList items={eventsItems} />
        <EventBanner />
      </div>
    </section>
  );
}
