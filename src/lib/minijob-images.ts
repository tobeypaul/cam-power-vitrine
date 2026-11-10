import type { ImageMetadata } from 'astro';
import bakery from '../assets/minijobs/bakery.jpg';
import carwash from '../assets/minijobs/carwash.jpg';
import delivery from '../assets/minijobs/delivery.jpg';
import event from '../assets/minijobs/event.jpg';
import hero from '../assets/minijobs/hero.jpg';
import hotel from '../assets/minijobs/hotel.jpg';
import household from '../assets/minijobs/household.jpg';
import restaurant from '../assets/minijobs/restaurant.jpg';
import shop from '../assets/minijobs/shop.jpg';
import student from '../assets/minijobs/student.jpg';
import tailor from '../assets/minijobs/tailor.jpg';
import technician from '../assets/minijobs/technician.jpg';
import type { MiniJobImage } from '../content/types';

export const minijobImages = {
  restaurant,
  bakery,
  shop,
  hotel,
  household,
  technician,
  delivery,
  event,
  carwash,
  tailor,
  student,
} satisfies Record<MiniJobImage, ImageMetadata>;

export const minijobHero = hero;
