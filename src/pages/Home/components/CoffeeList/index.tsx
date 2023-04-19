import { useContext } from 'react';

import { ShoppingCart } from '@phosphor-icons/react';
import nextId from 'react-id-generator';

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

export function CoffeeList() {
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
