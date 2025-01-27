// components/galleryItems.ts
import Replace from '@/public/images/Replace.png';

export interface GalleryProduct {
  id: number;
  image: string;
  title: string;
  subtitle: string;
  description: string;
  button: string;
  category: 'domestic' | 'international';  // Added category field
}

const GalleryProducts: GalleryProduct[] = [
  {
    id: 1,
    title: 'Resto 1',
    subtitle: 'Best restaurant in town',
    description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit semper dolor.',
    image: Replace.src,
    button: 'View more',
    category: 'domestic'
  },
  {
    id: 2,
    title: 'Resto 2',
    subtitle: 'Cozy and comfortable',
    description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit semper dolor.',
    image: Replace.src,
    button: 'View more',
    category: 'domestic'
  },
  {
    id: 3,
    title: 'Resto 3',
    subtitle: 'Amazing ambiance',
    description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit semper dolor.',
    image: Replace.src,
    button: 'View more',
    category: 'international'
  },
  {
    id: 4,
    title: 'Resto 4',
    subtitle: 'Delicious food',
    description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit semper dolor.',
    image: Replace.src,
    button: 'View more',
    category: 'international'
  },
  {
    id: 5,
    title: 'Resto 5',
    subtitle: 'Friendly staff',
    description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit semper dolor.',
    image: Replace.src,
    button: 'View more',
    category: 'domestic'
  },
  {
    id: 6,
    title: 'Resto 6',
    subtitle: 'Great location',
    description: 'Lorem ipsum dolor sit amet consectetur adipiscing elit semper dolor.',
    image: Replace.src,
    button: 'View more',
    category: 'international'
  },
];

export default GalleryProducts;
