import { useContext } from 'react';

import { ShoppingCart } from '@phosphor-icons/react';
import nextId from 'react-id-generator';

// import { coffeeDatabase } from '../../../../database';

import { AmountOfCoffee } from '../../../../components/AmountOfCoffee';

import {
  CoffeeContainer,
  CoffeeCardContainer,
  CoffeeCard,
  CoffeeTag,
  BuyContainer,
  AddToCart,
  CartButton,
} from './styles';
import { CoffeesContext } from '../../../../contexts/CoffeesContext';

// interface CoffeesProps {
//   id: string;
//   image: string;
//   tags: string[];
//   title: string;
//   paragraph: string;
//   price: number;
// }

export function CoffeeList() {
  // const [coffee, setCoffee] = useState<CoffeesProps[]>([]);

  // function handleGetCoffeeId(id: string) {
  //   const selectedCoffee: CoffeesProps = coffeeDatabase.find(
  //     (coffee) => coffee.id === id,
  //   )!;

  //   const checkDuplicateCoffees: boolean = coffee.indexOf(selectedCoffee) > -1;

  //   if (checkDuplicateCoffees === false) {
  //     setCoffee((state) => [...state, selectedCoffee]);
  //   }
  // }

  // const [coffee, setCoffee] = useState<CoffeesProps[]>([]);

  const { coffeeList, coffeeDatabase } = useContext(CoffeesContext);

  function handleGetCoffeeId(id: string) {
    coffeeList(id);
  }

  return (
    <CoffeeContainer>
      <h3>Nossos Cafés</h3>

      <CoffeeCardContainer>
        {coffeeDatabase.map((coffee) => {
          return (
            <CoffeeCard key={coffee.id}>
              <img src={`./coffees/${coffee.image}`} alt="" />

              <CoffeeTag>
                {coffee.tags.map((tag) => {
                  const tagId = nextId();

                  return <span key={tagId}>{tag}</span>;
                })}
              </CoffeeTag>

              <h4>{coffee.title}</h4>

              <p>{coffee.paragraph}</p>

              <BuyContainer>
                <span>
                  R${' '}
                  <span>
                    {coffee.price.toLocaleString('pt-br', {
                      minimumFractionDigits: 2,
                    })}
                  </span>
                </span>
                <AddToCart>
                  <AmountOfCoffee />

                  <CartButton
                    onClick={() => handleGetCoffeeId(coffee.id)}
                    title="Adicionar ao carrinho"
                  >
                    <ShoppingCart size={22} weight="fill" />
                  </CartButton>
                </AddToCart>
              </BuyContainer>
            </CoffeeCard>
          );
        })}
      </CoffeeCardContainer>
    </CoffeeContainer>
  );
}
