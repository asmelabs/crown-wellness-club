import { InnovationItem } from './innovation-item';
import type { InnovationItemType } from './types';

export function InnovationItemsList({ items }: { items: InnovationItemType[] }) {
  return (
    <div className='mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
      {items.map((item) => (
        <InnovationItem item={item} key={item.title} />
      ))}
    </div>
  );
}
