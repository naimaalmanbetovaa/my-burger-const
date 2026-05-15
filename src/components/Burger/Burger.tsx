import './Burger.css';

interface Props {
  ingredients: {
    type: string;
    count: number;
  }[];
}

const Burger = ({ ingredients }: Props) => {
  const renderIngredients = () => {
    const result: React.ReactNode[] = [];

    ingredients.forEach((ingredient) => {
      for (let i = 0; i < ingredient.count; i++) {
        result.push(
          <div
            key={ingredient.type + i}
            className={ingredient.type}
          />
        );
      }
    });

    if (result.length === 0) {
      return <p>Добавьте ингредиенты</p>;
    }

    return result;
  };

  return (
    <div className="Burger">
      <div className="BreadTop">
        <div className="Seeds1"></div>
        <div className="Seeds2"></div>
      </div>

      {renderIngredients()}

      <div className="BreadBottom"></div>
    </div>
  );
};

export default Burger;