import { CommunityStatItem } from './community-stat-item';
import type { CommunityStat } from './types';

interface CommunityStatsListProps {
  stats: CommunityStat[];
}

export function CommunityStatsList({ stats }: CommunityStatsListProps) {
  return (
    <div className='mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4'>
      {stats.map((stat) => (
        <CommunityStatItem key={stat.title} stat={stat} />
      ))}
    </div>
  );
}
