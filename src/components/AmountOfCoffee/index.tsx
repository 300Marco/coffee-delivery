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
  // const { coffee, getQuantityAmount } = useContext(CoffeesContext);
  // const { coffee, getQuantityAmount, testQuantity } = useContext(CoffeesContext);

  // const [alterQuantityCheckout, setAlterQuantityCheckout] = useState(1);
  // const [quantity, setQuantity] = useState(1);

  // const [mount, setMount] = useState(false); // State to prevent further executions of useEffect

  // useEffect(() => {
  //   if (!mount) {
  //     setMount(true);

  //     if (quantityCheckout) setAlterQuantityCheckout(quantityCheckout);
  //   }
  // }, [quantityCheckout, mount]);

  // function updateTotalPriceCoffee(quantity: number) {
  //   coffee.map((coffee) => {
  //     if (idCheckout === coffee.id) {
  //       coffee.totalPrice = coffee.price * quantity;

  //       return coffee.totalPrice;
  //     } else {
  //       return coffee;
  //     }
  //   });
  // }

  // function handleRemoveQuantity() {
  // if (alterQuantityCheckout > 1 || quantity > 1) {
  //   setQuantity((quantity -= 1));
  //   testQuantity(quantity);
  //   setAlterQuantityCheckout((alterQuantityCheckout -= 1));
  //   updateTotalPriceCoffee(alterQuantityCheckout);
  // }
  // }

  // function handleAddQuantity() {
  // setQuantity((quantity += 1));
  // testQuantity(quantity);
  // getQuantityAmount(quantity);
  // getQuantityAmount(alterQuantityCheckout);
  // updateTotalPriceCoffee(alterQuantityCheckout);
  // setAlterQuantityCheckout((alterQuantityCheckout += 1));
  // }

  let [quantity, setQuantity] = useState(1);
  let [quantitySelectedCoffee, setQuantitySelectedCoffee] = useState(1);

  const { coffeeListQuantity, coffeeQuantityCheckout } =
    useContext(CoffeesContext);

  useEffect(() => {
    if (quantityCheckout) setQuantitySelectedCoffee(quantityCheckout);
  }, [quantityCheckout]);

  function handleAddQuantity() {
    setQuantity((quantity += 1)); // quantidade do botão
    coffeeListQuantity(quantity); // quantidade da home page

    setQuantitySelectedCoffee((quantitySelectedCoffee += 1));
    if (idCheckout) coffeeQuantityCheckout(quantitySelectedCoffee, idCheckout);

    // console.log(
    //   'Adicionar',
    //   quantity,
    //   quantitySelectedCoffee,
    //   quantityCheckout,
    // );
  }

  function handleRemoveQuantity() {
    if (quantity !== 1) setQuantity((quantity -= 1)); // quantidade do botão
    coffeeListQuantity(quantity); // quantidade da home page

    if (quantitySelectedCoffee !== 1)
      setQuantitySelectedCoffee((quantitySelectedCoffee -= 1));
    if (idCheckout) coffeeQuantityCheckout(quantitySelectedCoffee, idCheckout);

    // console.log('Remover', quantity, quantitySelectedCoffee, quantityCheckout);
  }

  return (
    <AmountOfCoffeeContainer>
      {/* <Minus size={14} weight="bold" onClick={handleRemoveQuantity} /> */}
      <Minus size={14} weight="bold" onClick={handleRemoveQuantity} />
      {quantityCheckout ? (
        // <span>{alterQuantityCheckout}</span>
        <span>{quantitySelectedCoffee}</span>
      ) : (
        <span>{quantity}</span>
      )}
      <Plus size={14} weight="bold" onClick={handleAddQuantity} />
    </AmountOfCoffeeContainer>
  );
}
