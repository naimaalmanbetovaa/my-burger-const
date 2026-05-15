export interface Ingredient {
  name: string;
  price: number;
  image: string;
  type: string;
}

export interface BurgerIngredient {
  type: string;
  count: number;
}