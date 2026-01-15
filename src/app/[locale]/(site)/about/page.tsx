import { StatsGrid } from '@/components/stats-grid';

export default function AboutPage() {
  return (
    <div>
      <StatsGrid
        title='Our Impact in Numbers'
        description="See how we're making a difference across the globe"
        stats={[
          {
            value: '10M+',
            label: 'Active Users',
            description: 'Growing every day',
          },
        ]}
      />
    </div>
  );
}
