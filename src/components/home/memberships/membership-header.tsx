import { PaintedText } from '@/components/painted-text';

export function MembershipHeader() {
  return (
    <div className='space-y-4 text-center'>
      <h1 className='text-4xl font-bold md:text-5xl lg:text-6xl'>
        <PaintedText text='MEMBERSHIP EXCELLENCE' paintCount='35%' />
      </h1>
      <p className='mx-auto max-w-3xl text-base text-muted-foreground md:text-lg'>
        Choose your path to luxury wellness. Each membership is crafted to deliver exceptional value and exclusive
        experiences in Azerbaijan&apos;s premier destination.
      </p>
    </div>
  );
}
