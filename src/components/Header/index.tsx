import { useContext } from 'react';

import { MapPin, ShoppingCart } from '@phosphor-icons/react';
import { NavLink } from 'react-router-dom';

import { CoffeesContext } from '../../contexts/CoffeesContext';
import logo from '../../assets/logoCoffeeDelivery.svg';

import {
  HeaderContainer,
  ItemsCount,
  NavCart,
  NavLocation,
  SrOnly,
} from './styles';

export function Header() {
  const { coffee } = useContext(CoffeesContext);

  const amountCoffees = coffee.length;

  return (
    <HeaderContainer>
      <span>
        <SrOnly>Coffee Delivery</SrOnly>
        <img
          src={logo}
          alt="ícone roxo de um copo de café, e do lado tem o nome do site coffee delivery"
        />
      </span>

      <nav>
        <NavLocation>
          <MapPin size={22} weight="fill" />
          São Paulo, SP
        </NavLocation>

        <NavLink to="/checkout">
          <NavCart title="Ir para Checkout">
            <ShoppingCart size={22} weight="fill" />
            {amountCoffees > 0 && <ItemsCount>{amountCoffees}</ItemsCount>}
          </NavCart>
        </NavLink>
      </nav>
    </HeaderContainer>
  );
}
