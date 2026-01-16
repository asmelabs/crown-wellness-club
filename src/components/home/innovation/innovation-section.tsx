import { innovationItems, innovationStats } from './data';
import { InnovationBanner } from './innovation-banner';
import { InnovationHeader } from './innovation-header';
import { InnovationItemsList } from './innovation-items-list';
import { InnovationStats } from './innovation-stats';

export function InnovationSection() {
  return (
    <section id='innovation' className='py-16 md:py-24'>
      <div className='mx-auto max-w-7xl px-4'>
        <InnovationHeader />
        <InnovationStats stats={innovationStats} />
        <InnovationItemsList items={innovationItems} />
        <InnovationBanner />
      </div>
    </section>
  );
}
