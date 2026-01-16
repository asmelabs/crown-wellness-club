import { DynamicIcon } from 'lucide-react/dynamic';
import { PaintedText } from '@/components/painted-text';
import { Card, CardContent } from '@/components/ui/card';
import type { CommunityItemType } from './types';

export function CommunityItem({ item }: { item: CommunityItemType }) {
  return (
    <Card
      key={item.title}
      className='group relative h-full overflow-hidden transition-transform duration-300 hover:scale-105'
      style={{ '--glow': item.primaryColor } as React.CSSProperties}
    >
      <div className='pointer-events-none absolute -inset-10 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100 bg-[radial-gradient(circle_at_top,var(--glow),transparent_60%)]' />
      <CardContent className='relative z-10 flex flex-col items-start gap-4'>
        <div
          className='flex size-14 items-center justify-center rounded-full text-white shadow-sm'
          style={{ backgroundColor: item.primaryColor }}
        >
          <DynamicIcon name={item.icon} className='size-6' />
        </div>
        <div className='space-y-1'>
          <h3 className='text-xl font-semibold'>{item.title}</h3>
          <p className='text-sm text-muted-foreground'>
            <PaintedText text={item.subtitle} paintCount={1} direction='right' />
          </p>
        </div>
        <p className='text-sm text-muted-foreground'>{item.description}</p>
      </CardContent>
    </Card>
  );
}
