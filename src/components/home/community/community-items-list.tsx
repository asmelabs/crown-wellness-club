import { CommunityItem } from './community-item';
import type { CommunityItemType } from './types';

interface CommunityItemsListProps {
  items: CommunityItemType[];
}

export function CommunityItemsList({ items }: CommunityItemsListProps) {
  return (
    <div className='mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
      {items.map((item) => (
        <CommunityItem key={item.title} item={item} />
      ))}
    </div>
  );
}
