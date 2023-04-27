import { useContext, useEffect, useState } from 'react';
import { Minus, Plus } from '@phosphor-icons/react';

import { CoffeesContext } from '../../contexts/CoffeesContext';

import { AmountOfCoffeeContainer } from './styles';

interface CheckoutDataProps {
  quantityCheckout?: number;
  idCheckout?: string;
}

export function AmountOfCoffee({
  quantityCheckout,
  idCheckout,
}: CheckoutDataProps) {
  let [quantity, setQuantity] = useState(1);
  let [quantitySelectedCoffee, setQuantitySelectedCoffee] = useState(1);

  const { coffeeListQuantity, coffeeQuantityCheckout } =
    useContext(CoffeesContext);

  useEffect(() => {
    if (quantityCheckout) setQuantitySelectedCoffee(quantityCheckout);
  }, [quantityCheckout]);

  function handleAddQuantity() {
    setQuantity((quantity += 1));
    coffeeListQuantity(quantity);

    setQuantitySelectedCoffee((quantitySelectedCoffee += 1));
    if (idCheckout) coffeeQuantityCheckout(quantitySelectedCoffee, idCheckout);
  }

  function handleRemoveQuantity() {
    if (quantity !== 1) setQuantity((quantity -= 1));
    coffeeListQuantity(quantity);

    if (quantitySelectedCoffee !== 1)
      setQuantitySelectedCoffee((quantitySelectedCoffee -= 1));
    if (idCheckout) coffeeQuantityCheckout(quantitySelectedCoffee, idCheckout);
  }

  return (
    <AmountOfCoffeeContainer>
      <Minus size={14} weight="bold" onClick={handleRemoveQuantity} />
      {quantityCheckout ? (
        <span>{quantitySelectedCoffee}</span>
      ) : (
        <span>{quantity}</span>
      )}
      <Plus size={14} weight="bold" onClick={handleAddQuantity} />
    </AmountOfCoffeeContainer>
  );
}
