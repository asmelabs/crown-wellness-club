import { CommunityHeader } from './community-header';
import { CommunityItemsList } from './community-items-list';
import { CommunityStatsList } from './community-stats-list';
import { communityItems, communityStats } from './data';

export function CommunitySection() {
  return (
    <section className='py-16 md:py-24'>
      <div className='mx-auto max-w-7xl px-4'>
        <CommunityHeader />

        <CommunityStatsList stats={communityStats} />

        <CommunityItemsList items={communityItems} />
      </div>
    </section>
  );
}
