import { DynamicIcon } from 'lucide-react/dynamic';
import { Card, CardContent } from '@/components/ui/card';
import type { InnovationStatType } from './types';

export function InnovationStatItem({ stat }: { stat: InnovationStatType }) {
  return (
    <Card key={stat.title} className='h-full'>
      <CardContent className='flex flex-col items-center gap-3 text-center'>
        <div className='flex size-12 items-center justify-center rounded-full border border-border/60 bg-muted/40'>
          <DynamicIcon name={stat.icon} className='size-6 text-primary' />
        </div>
        <div className='text-2xl font-semibold text-foreground'>{stat.title}</div>
        <p className='text-sm text-muted-foreground'>{stat.subtitle}</p>
      </CardContent>
    </Card>
  );
}
