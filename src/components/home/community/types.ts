import type { IconName } from 'lucide-react/dynamic';

export interface CommunityStat {
  title: string;
  subtitle: string;
  icon: IconName;
}

export interface CommunityItemType {
  title: string;
  subtitle: string;
  description: string;
  icon: IconName;
  primaryColor: string;
}
