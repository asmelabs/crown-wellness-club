import { languagesList } from '@/i18n/data';
import type { NavbarItemType } from './types';

export const navbarItems: NavbarItemType[] = [
  {
    title: 'Home',
    href: '/',
  },
  {
    title: 'About Us',
    href: '/about',
  },
  {
    title: 'Trainers',
    href: '/#trainers',
  },
  {
    title: 'Gallery',
    href: '/#gallery',
  },
  {
    title: 'Premium Experiences',
    href: '/#services',
  },
  {
    title: 'Membership',
    href: '/#membership',
  },
];

export const navbarLanguages = languagesList;
