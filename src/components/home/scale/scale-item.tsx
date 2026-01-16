import { DynamicIcon } from 'lucide-react/dynamic';
import { PaintedText } from '@/components/painted-text';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import type { ScaleItemType } from './types';

export function ScaleItem({ item }: { item: ScaleItemType }) {
  const tag = item.tags[0];

  return (
    <Card
      className='group relative h-full overflow-hidden transition-transform duration-300 hover:scale-105'
      style={{ '--glow': item.primaryColor } as React.CSSProperties}
    >
      <div className='pointer-events-none absolute -inset-10 opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100 bg-[radial-gradient(circle_at_top,var(--glow),transparent_60%)]' />
      <CardContent className='relative z-10 flex flex-col items-center justify-center gap-6 text-center'>
        <div
          className='flex size-16 items-center justify-center rounded-full text-white shadow-sm'
          style={{ backgroundColor: item.primaryColor }}
        >
          <DynamicIcon name={item.icon} className='size-7' />
        </div>
        <h3 className='text-2xl font-semibold md:text-3xl' style={{ color: item.primaryColor }}>
          {item.title}
        </h3>
        <p className='text-base text-muted-foreground' style={{ color: item.primaryColor }}>
          <PaintedText text={item.subtitle} paintCount={1} direction='right' className='text-current' />
        </p>
        <Badge variant='default' size='lg' className='text-white' style={{ backgroundColor: item.primaryColor }}>
          {tag}
        </Badge>
        <p className='text-sm text-muted-foreground'>{item.description}</p>
      </CardContent>
    </Card>
  );
}
