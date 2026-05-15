import { useState } from 'react';
import Burger from './components/Burger/Burger';
import Controls from './components/Controls/Controls';
import { BASE_PRICE, INGREDIENTS } from './data/ingredients';
import { BurgerIngredient } from './types/ingredient';

function App() {
  const [myBurger, setMyBurger] = useState<BurgerIngredient[]>([
    { type: 'salad', count: 0 },
    { type: 'cheese', count: 0 },
    { type: 'meat', count: 0 },
    { type: 'bacon', count: 0 },
  ]);

  const onAdd = (ingType: string) => {
    const copy = [...myBurger];
    const index = copy.findIndex(item => item.type === ingType);
    copy[index].count++;
    setMyBurger(copy);
  };

  const onDelete = (ingType: string) => {
    const copy = [...myBurger];
    const index = copy.findIndex(item => item.type === ingType);
    if (copy[index].count > 0) {
      copy[index].count--;
      setMyBurger(copy);
    }
  };

  let cost = BASE_PRICE;
  myBurger.forEach(item => {
    const info = INGREDIENTS.find(i => i.type === item.type);
    if (info) {
      cost += info.price * item.count;
    }
  });

  return (
    <div style={{ display: 'flex', padding: '40px', gap: '50px' }}>
      <div className="left-side">
        <Controls
          ingredients={INGREDIENTS}
          burgerIngredients={myBurger}
          addIngredient={onAdd}
          removeIngredient={onDelete}
        />
      </div>

      <div className="right-side">
        <Burger ingredients={myBurger} />
        <h3 style={{ marginTop: '20px' }}>
          Общая стоимость: {cost} сом
        </h3>
      </div>
    </div>
  );
}

export default App;