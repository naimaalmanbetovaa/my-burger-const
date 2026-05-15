import type { Ingredient } from '../../types/ingredient';

interface Props {
  ingredient: Ingredient;
  count: number;
  addIngredient: (type: string) => void;
  removeIngredient: (type: string) => void;
}

const IngredientButton = ({
  ingredient,
  count,
  addIngredient,
  removeIngredient,
}: Props) => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        marginBottom: '15px',
      }}
    >
      <img
        src={ingredient.image}
        alt={ingredient.name}
        width="70"
        height="70"
        style={{
            border: '1px solid black',
            cursor: 'pointer',
            borderRadius: '5px',
        }}
        onClick={() => addIngredient(ingredient.type)}
      />

      <p>{ingredient.name}</p>

      <p>x{count}</p>

      <button onClick={() => removeIngredient(ingredient.type)}>
        Удалить
      </button>
    </div>
  );
};

export default IngredientButton;