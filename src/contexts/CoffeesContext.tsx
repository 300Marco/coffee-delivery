import { ReactNode, createContext, useState } from 'react';
import { coffeeDatabase } from '../database';

interface CoffeesProps {
  id: string;
  image: string;
  tags: string[];
  title: string;
  paragraph: string;
  price: number;
  quantity: number | undefined;
  totalPrice: number;
}

interface CoffeesContextType {
  coffee: CoffeesProps[];
  coffeeDatabase: CoffeesProps[];
  coffeeList: (id: string) => void;
  coffeeListQuantity: (value: number) => void;
  updateCoffeeList: (id: string) => void;
  coffeeQuantityCheckout: (quantity: number, id: string) => void;
  resetCoffeeList: () => void;
}

export const CoffeesContext = createContext({} as CoffeesContextType);

interface CoffeesContextProviderProps {
  children: ReactNode;
}

export function CoffeesContextProvider({
  children,
}: CoffeesContextProviderProps) {
  const [quantityCoffee, setQuantityCoffee] = useState(1);
  const [coffee, setCoffee] = useState<CoffeesProps[]>([]);

  function coffeeListQuantity(quantity: number) {
    setQuantityCoffee(quantity);
  }

  function coffeeQuantityCheckout(quantity: number, id: string) {
    setCoffee(
      coffee.map((coffee) => {
        if (coffee.id === id) coffee.totalPrice = coffee.price * quantity;

        return coffee;
      }),
    );
  }

  function coffeeList(id: string) {
    const selectedCoffee: CoffeesProps = coffeeDatabase.find(
      (coffee) => coffee.id === id,
    )!;

    const checkDuplicateCoffees: boolean = coffee.indexOf(selectedCoffee) > -1;

    if (checkDuplicateCoffees === false) {
      selectedCoffee.quantity = quantityCoffee;

      selectedCoffee.totalPrice = selectedCoffee.price * quantityCoffee;

      setCoffee((state) => [...state, selectedCoffee]);
      setQuantityCoffee(1);
    }
  }

  function updateCoffeeList(id: string) {
    const removeSelectedCoffee = coffee.filter((coffee) => {
      return coffee.id !== id;
    });

    setCoffee(removeSelectedCoffee);
    setQuantityCoffee(1);
  }

  function resetCoffeeList() {
    setCoffee([]);
  }

  return (
    <CoffeesContext.Provider
      value={{
        coffee,
        coffeeList,
        coffeeDatabase,
        coffeeListQuantity,
        updateCoffeeList,
        coffeeQuantityCheckout,
        resetCoffeeList,
      }}
    >
      {children}
    </CoffeesContext.Provider>
  );
}
