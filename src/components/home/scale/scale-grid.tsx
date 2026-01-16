import { ScaleItem } from './scale-item';
import type { ScaleItemType } from './types';

export function ScaleGrid({ items }: { items: ScaleItemType[] }) {
  return (
    <div className='grid gap-6 md:grid-cols-2'>
      {items.map((item) => (
        <ScaleItem key={item.title} item={item} />
      ))}
    </div>
  );
}
