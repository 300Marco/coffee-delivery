import { Minus, Plus } from '@phosphor-icons/react';
import { AmountOfCoffeeContainer } from './styles';
import { useState } from 'react';

export function AmountOfCoffee() {
  let [quantity, setQuantity] = useState(1);

  function removeCoffee() {
    if (quantity > 1) {
      setQuantity((quantity -= 1));
    }
  }

  function addCoffee() {
    setQuantity((quantity += 1));
  }

  return (
    <AmountOfCoffeeContainer>
      <Minus size={14} weight="bold" onClick={removeCoffee} />
      <span>{quantity}</span>
      <Plus size={14} weight="bold" onClick={addCoffee} />
    </AmountOfCoffeeContainer>
  );
}
