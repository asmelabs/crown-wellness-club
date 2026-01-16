import type { IconName } from 'lucide-react/dynamic';

export interface InnovationStatType {
  title: string;
  subtitle: string;
  icon: IconName;
}

export interface InnovationItemType {
  title: string;
  subtitle: string;
  description: string;
  icon: IconName;
  primaryColor: string;
  tag: string;
}
