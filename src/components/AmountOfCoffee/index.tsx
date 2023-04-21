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
  const { coffee, getQuantityAmount } = useContext(CoffeesContext);

  let [alterQuantityCheckout, setAlterQuantityCheckout] = useState(0);
  let [quantity, setQuantity] = useState(1);

  const [mount, setMount] = useState(false); // State to prevent further executions of useEffect

  useEffect(() => {
    if (!mount) {
      setMount(true);

      if (quantityCheckout) setAlterQuantityCheckout(quantityCheckout);
    }
  }, [quantityCheckout, mount]);

  function updateTotalPriceCoffee(quantity: number) {
    coffee.map((coffee) => {
      if (idCheckout === coffee.id) {
        coffee.totalPrice = coffee.price * quantity;

        return coffee.totalPrice;
      } else {
        return coffee;
      }
    });
  }

  function handleRemoveQuantity() {
    if (alterQuantityCheckout > 1 || quantity > 1) {
      setQuantity((quantity -= 1));
      getQuantityAmount(quantity);

      setAlterQuantityCheckout((alterQuantityCheckout -= 1));
      updateTotalPriceCoffee(alterQuantityCheckout);
    }
  }

  function handleAddQuantity() {
    setQuantity((quantity += 1));
    getQuantityAmount(quantity);

    setAlterQuantityCheckout((alterQuantityCheckout += 1));

    updateTotalPriceCoffee(alterQuantityCheckout);
  }

  coffee.map((coffee) => {
    if (idCheckout === coffee.id) {
      coffee.quantity = alterQuantityCheckout;

      return coffee.quantity;
    } else {
      return coffee;
    }
  });

  return (
    <AmountOfCoffeeContainer>
      <Minus size={14} weight="bold" onClick={handleRemoveQuantity} />
      {quantityCheckout ? (
        <span>{alterQuantityCheckout}</span>
      ) : (
        <span>{quantity}</span>
      )}
      <Plus size={14} weight="bold" onClick={handleAddQuantity} />
    </AmountOfCoffeeContainer>
  );
}
