import { Minus, Plus } from '@phosphor-icons/react';
import { AmountOfCoffeeContainer } from './styles';
import { useContext, useState } from 'react';
import { CoffeesContext } from '../../contexts/CoffeesContext';

export function AmountOfCoffee() {
  const { getQuantityAmount } = useContext(CoffeesContext);

  let [quantity, setQuantity] = useState(1);

  function handleRemoveCoffee() {
    if (quantity > 1) {
      setQuantity((quantity -= 1));
      getQuantityAmount(quantity);
    }
  }

  function handleAddCoffee() {
    setQuantity((quantity += 1));
    getQuantityAmount(quantity);
  }

  return (
    <AmountOfCoffeeContainer>
      <Minus size={14} weight="bold" onClick={handleRemoveCoffee} />
      <span>{quantity}</span>
      <Plus size={14} weight="bold" onClick={handleAddCoffee} />
    </AmountOfCoffeeContainer>
  );
}
