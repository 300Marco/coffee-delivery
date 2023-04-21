import { Minus, Plus } from '@phosphor-icons/react';
import { AmountOfCoffeeContainer } from './styles';
import { useContext, useEffect, useState } from 'react';
import { CoffeesContext } from '../../contexts/CoffeesContext';

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

  const [mount, setMount] = useState(false); // State to prevent further executions of useEffect

  let [quantity, setQuantity] = useState(1);

  function updateTotalPriceCoffee() {
    coffee.map((coffee) => {
      if (idCheckout === coffee.id) {
        return (coffee.totalPrice = coffee.price * alterQuantityCheckout);
      } else {
        return coffee;
      }
    });
  }

  function handleRemoveCoffee() {
    if (quantity > 1) {
      setQuantity((quantity -= 1));
      getQuantityAmount(quantity);
    }

    if (alterQuantityCheckout > 1) {
      setAlterQuantityCheckout((alterQuantityCheckout -= 1));
      updateTotalPriceCoffee();
    }
  }

  function handleAddCoffee() {
    setQuantity((quantity += 1));
    getQuantityAmount(quantity);

    setAlterQuantityCheckout((alterQuantityCheckout += 1));
    updateTotalPriceCoffee();
  }

  coffee.map((coffee) => {
    if (idCheckout === coffee.id) {
      coffee.totalPrice = coffee.price * alterQuantityCheckout;

      return (coffee.quantity = alterQuantityCheckout);
    } else {
      return coffee;
    }
  });

  useEffect(() => {
    if (!mount) {
      setMount(true);

      if (quantityCheckout) {
        setAlterQuantityCheckout(quantityCheckout);
      }
    }
  }, [quantityCheckout, mount]);

  return (
    <AmountOfCoffeeContainer>
      <Minus size={14} weight="bold" onClick={handleRemoveCoffee} />
      {quantityCheckout ? (
        <span>{alterQuantityCheckout}</span>
      ) : (
        <span>{quantity}</span>
      )}
      <Plus size={14} weight="bold" onClick={handleAddCoffee} />
    </AmountOfCoffeeContainer>
  );
}
