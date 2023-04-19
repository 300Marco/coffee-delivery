import { ReactNode, createContext, useState } from 'react';
import { coffeeDatabase } from '../database';

interface CoffeesProps {
  id: string;
  image: string;
  tags: string[];
  title: string;
  paragraph: string;
  price: number;
}

interface CoffeesContextType {
  coffee: CoffeesProps[];
  coffeeDatabase: CoffeesProps[];
  coffeeList: (id: string) => void;
}

export const CoffeesContext = createContext({} as CoffeesContextType);

interface CoffeesContextProviderProps {
  children: ReactNode;
}

export function CoffeesContextProvider({
  children,
}: CoffeesContextProviderProps) {
  const [coffee, setCoffee] = useState<CoffeesProps[]>([]);

  function coffeeList(id: string) {
    const selectedCoffee: CoffeesProps = coffeeDatabase.find(
      (coffee) => coffee.id === id,
    )!;

    const checkDuplicateCoffees: boolean = coffee.indexOf(selectedCoffee) > -1;

    if (checkDuplicateCoffees === false) {
      setCoffee((state) => [...state, selectedCoffee]);
    }
  }

  return (
    <CoffeesContext.Provider value={{ coffee, coffeeList, coffeeDatabase }}>
      {children}
    </CoffeesContext.Provider>
  );
}
