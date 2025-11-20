import { Project, Service, NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#' },
  { label: 'Me', href: '#about' },
  { label: 'Portfolio', href: '#work' },
  { label: 'Services', href: '#services' },
  { label: 'Get in touch', href: '#contact' },
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: 'Aurelia',
    category: 'Luxery Hotel',
    image: './src/assets/p1.png',
    year: '2024',
    src: 'https://muneeb786-byte.github.io/Aurelia/'
  },
  {
    id: 2,
    title: 'Nova Shop',
    category: 'E-commerce Website',
    image: './src/assets/p2.png',
    year: '2024',
    src: 'https://muneeb786-byte.github.io/NovaShop.co/'
  },
  {
    id: 3,
    title: 'Nikey Shoes',
    category: 'E-Commerce',
    image: './src/assets/p3.png',
    year: '2023',
    src: 'https://muneeb786-byte.github.io/Nikey-Shoes-Web/'
  },
  {
    id: 4,
    title: 'Gallery Project',
    category: 'Gallery',
    image: './src/assets/p4.png',
    year: '2022',
    src: 'https://muneeb786-byte.github.io/gallery-project/'
  }
];

export const SERVICES: Service[] = [
  {
    id: 1,
    title: 'Web Design',
    description: 'Crafting immersive web experiences that blend aesthetics with functionality. I focus on user-centric design that tells your brand story effectively.',
    tags: ['UI/UX', 'Development', 'Interaction']
  },
  {
    id: 2,
    title: 'Brand Identity',
    description: 'Building robust visual systems that define your brand\'s presence. From logos to comprehensive guidelines, I help brands stand out.',
    tags: ['Strategy', 'Logo', 'Guidelines']
  },
  {
    id: 3,
    title: 'Art Direction',
    description: 'Curating visual narratives for campaigns and editorials. I oversee the creative process to ensure a cohesive and impactful visual language.',
    tags: ['Photography', 'Styling', 'Concept']
  }
];