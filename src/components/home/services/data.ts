import type { ServiceType } from './types';

export const services: ServiceType[] = [
  {
    title: 'Royal Spa',
    slug: 'royal-spa',
    subtitle: 'Restoration & Rituals',
    description: 'Indulge in curated therapies designed to restore balance, elevate recovery, and renew your energy.',
    tags: ['Signature'],
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=1400&auto=format&fit=crop',
    icon: 'sparkles',
    stats: [
      { title: '12', subtitle: 'Treatment Rooms' },
      { title: '45', subtitle: 'Min Sessions' },
      { title: '24/7', subtitle: 'Concierge' },
    ],
    featuresTitle: 'Highlights',
    features: ['Thermal suites', 'Private rituals', 'Aromatherapy', 'Recovery lounge', 'Expert therapists'],
  },
  {
    title: 'Elite Fitness',
    slug: 'elite-fitness',
    subtitle: 'Performance & Precision',
    description: 'State-of-the-art equipment, performance training, and personalized coaching to reach peak potential.',
    tags: ['Performance'],
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1400&auto=format&fit=crop',
    icon: 'dumbbell',
    stats: [
      { title: '150+', subtitle: 'Equipment' },
      { title: '40', subtitle: 'Programs' },
      { title: '1:1', subtitle: 'Coaching' },
    ],
    featuresTitle: 'Highlights',
    features: ['Strength labs', 'Cardio suites', 'HIIT arena', 'Recovery tech', 'Mobility studio'],
  },
  {
    title: 'Aqua Retreat',
    slug: 'aqua-retreat',
    subtitle: 'Flow & Recovery',
    description: 'A serene water experience featuring vitality pools, hydrotherapy, and restorative immersion.',
    tags: ['Wellness'],
    image: 'https://images.unsplash.com/photo-1501117716987-c8e1ecb210f9?q=80&w=1400&auto=format&fit=crop',
    icon: 'waves',
    stats: [
      { title: '28°', subtitle: 'Thermal Pools' },
      { title: '6', subtitle: 'Hydro Zones' },
      { title: '90', subtitle: 'Min Journeys' },
    ],
    featuresTitle: 'Highlights',
    features: ['Vitality pools', 'Hydrotherapy', 'Cold plunge', 'Sauna suites', 'Aqua lounge'],
  },
];
