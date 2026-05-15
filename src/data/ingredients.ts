import type { Ingredient } from '../types/ingredient';

import baconImage from '../assets/bacon.png';
import cheeseImage from '../assets/cheese.png';
import meatImage from '../assets/meat.png';
import saladImage from '../assets/salad.png';

export const BASE_PRICE = 30;

export const INGREDIENTS: Ingredient[] = [
  {
    name: 'Салат',
    price: 10,
    image: saladImage,
    type: 'salad',
  },
  {
    name: 'Сыр',
    price: 50,
    image: cheeseImage,
    type: 'cheese',
  },
  {
    name: 'Мясо',
    price: 80,
    image: meatImage,
    type: 'meat',
  },
  {
    name: 'Бекон',
    price: 60,
    image: baconImage,
    type: 'bacon',
  },
];