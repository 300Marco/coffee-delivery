import { ShoppingCart } from '@phosphor-icons/react';

import coffeeExpressoTradicional from '../../../assets/coffee-expresso-tradicional.svg';
import {
  CoffeeContainer,
  CoffeeCardContainer,
  CoffeeCard,
  CoffeeTag,
  BuyContainer,
  AddToCart,
  CartButton,
} from './styles';
import { AmountOfCoffee } from '../../components/AmountOfCoffee';

export function CoffeeList() {
  return (
    <CoffeeContainer>
      <h3>Nossos Cafés</h3>

      <CoffeeCardContainer>
        <CoffeeCard>
          <img src={coffeeExpressoTradicional} alt="" />

          <CoffeeTag>
            <span>Tradicional</span>
            <span>Gelado</span>
          </CoffeeTag>

          <h4>Expresso Tradicional</h4>

          <p>O tradicional café feito com água quente e grãos moídos</p>

          <BuyContainer>
            <span>
              R$ <span>9,90</span>
            </span>
            <AddToCart>
              <AmountOfCoffee />

              <CartButton>
                <ShoppingCart size={22} weight="fill" />
              </CartButton>
            </AddToCart>
          </BuyContainer>
        </CoffeeCard>

        <CoffeeCard>
          <img src={coffeeExpressoTradicional} alt="" />

          <CoffeeTag>
            <span>Tradicional</span>
            <span>Tradicional</span>
          </CoffeeTag>

          <h4>Expresso Tradicional</h4>

          <p>O tradicional café feito com água quente e grãos moídos</p>

          <BuyContainer>
            <span>
              R$ <span>9,90</span>
            </span>
            <AddToCart>
              <AmountOfCoffee />

              <CartButton>
                <ShoppingCart size={22} weight="fill" />
              </CartButton>
            </AddToCart>
          </BuyContainer>
        </CoffeeCard>

        <CoffeeCard>
          <img src={coffeeExpressoTradicional} alt="" />

          <CoffeeTag>
            <span>Tradicional</span>
          </CoffeeTag>

          <h4>Expresso Tradicional</h4>

          <p>O tradicional café feito com água quente e grãos moídos</p>

          <BuyContainer>
            <span>
              R$ <span>9,90</span>
            </span>
            <AddToCart>
              <AmountOfCoffee />

              <CartButton>
                <ShoppingCart size={22} weight="fill" />
              </CartButton>
            </AddToCart>
          </BuyContainer>
        </CoffeeCard>
        <CoffeeCard>
          <img src={coffeeExpressoTradicional} alt="" />

          <CoffeeTag>
            <span>Tradicional</span>
            <span>Alcoólico</span>
          </CoffeeTag>

          <h4>Expresso Tradicional</h4>

          <p>O tradicional café feito com água quente e grãos moídos</p>

          <BuyContainer>
            <span>
              R$ <span>9,90</span>
            </span>
            <AddToCart>
              <AmountOfCoffee />

              <CartButton>
                <ShoppingCart size={22} weight="fill" />
              </CartButton>
            </AddToCart>
          </BuyContainer>
        </CoffeeCard>
        <CoffeeCard>
          <img src={coffeeExpressoTradicional} alt="" />

          <CoffeeTag>
            <span>Tradicional</span>
          </CoffeeTag>

          <h4>Expresso Tradicional</h4>

          <p>O tradicional café feito com água quente e grãos moídos</p>

          <BuyContainer>
            <span>
              R$ <span>9,90</span>
            </span>
            <AddToCart>
              <AmountOfCoffee />

              <CartButton>
                <ShoppingCart size={22} weight="fill" />
              </CartButton>
            </AddToCart>
          </BuyContainer>
        </CoffeeCard>
        <CoffeeCard>
          <img src={coffeeExpressoTradicional} alt="" />

          <CoffeeTag>
            <span>Tradicional</span>
            <span>Gelado</span>
          </CoffeeTag>

          <h4>Expresso Tradicional</h4>

          <p>O tradicional café feito com água quente e grãos moídos</p>

          <BuyContainer>
            <span>
              R$ <span>9,90</span>
            </span>
            <AddToCart>
              <AmountOfCoffee />

              <CartButton>
                <ShoppingCart size={22} weight="fill" />
              </CartButton>
            </AddToCart>
          </BuyContainer>
        </CoffeeCard>
      </CoffeeCardContainer>
    </CoffeeContainer>
  );
}
