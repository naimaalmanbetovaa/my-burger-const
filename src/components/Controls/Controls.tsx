import type {
  Ingredient,
  BurgerIngredient,
} from '../../types/ingredient';

import IngredientButton from './IngredientButton';

interface Props {
  ingredients: Ingredient[];
  burgerIngredients: BurgerIngredient[];

  addIngredient: (type: string) => void;
  removeIngredient: (type: string) => void;
}

const Controls = ({
  ingredients,
  burgerIngredients,
  addIngredient,
  removeIngredient,
}: Props) => {
  return (
    <div>
      <h2>Ingredients</h2>

      {ingredients.map((ingredient) => {
        const currentIngredient = burgerIngredients.find(
          (item) => item.type === ingredient.type
        );

        return (
          <IngredientButton
            key={ingredient.type}
            ingredient={ingredient}
            count={currentIngredient?.count || 0}
            addIngredient={addIngredient}
            removeIngredient={removeIngredient}
          />
        );
      })}
    </div>
  );
};

export default Controls;