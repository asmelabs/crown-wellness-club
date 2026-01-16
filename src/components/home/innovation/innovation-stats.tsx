import { InnovationStatItem } from './innovation-stat-item';
import type { InnovationStatType } from './types';

export function InnovationStats({ stats }: { stats: InnovationStatType[] }) {
  return (
    <div className='mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4'>
      {stats.map((stat) => (
        <InnovationStatItem key={stat.title} stat={stat} />
      ))}
    </div>
  );
}
