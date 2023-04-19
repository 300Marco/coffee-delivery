import { Minus, Plus } from '@phosphor-icons/react';
import { AmountOfCoffeeContainer } from './styles';
import { useState } from 'react';

export function AmountOfCoffee() {
  let [quantity, setQuantity] = useState(1);

  function handleRemoveCoffee() {
    if (quantity > 1) {
      setQuantity((quantity -= 1));
    }
  }

  function handleAddCoffee() {
    setQuantity((quantity += 1));
  }

  return (
    <AmountOfCoffeeContainer>
      <Minus size={14} weight="bold" onClick={handleRemoveCoffee} />
      <span>{quantity}</span>
      <Plus size={14} weight="bold" onClick={handleAddCoffee} />
    </AmountOfCoffeeContainer>
  );
}
