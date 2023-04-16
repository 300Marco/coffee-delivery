import { Minus, Plus } from '@phosphor-icons/react';
import { AmountOfCoffeeContainer } from './styles';
import { useState } from 'react';

export function AmountOfCoffee() {
  // let [test1, setTest1] = useState(0);

  // function addCoffee() {
  //   setTest1((test1 += 1));
  // }

  // function removeCoffee() {
  //   if (test1 > 0) {
  //     setTest1((test1 -= 1));
  //   }
  // }

  return (
    <AmountOfCoffeeContainer>
      <Minus size={14} weight="bold" /* onClick={removeCoffee} */ />
      <input type="number" value={2} min={0} />
      <Plus size={14} weight="bold" /* onClick={addCoffee} */ />
    </AmountOfCoffeeContainer>
  );
}
