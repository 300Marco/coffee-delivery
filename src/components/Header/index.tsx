import { MapPin, ShoppingCart } from '@phosphor-icons/react';
import { NavLink } from 'react-router-dom';

import logo from '../../assets/logoCoffeeDelivery.svg';

import {
  HeaderContainer,
  ItemsCount,
  NavCart,
  NavLocation,
  SrOnly,
} from './styles';

export function Header() {
  return (
    <HeaderContainer>
      <NavLink to="/">
        <span>
          <SrOnly>Coffee Delivery</SrOnly>
          <img
            src={logo}
            alt="ícone roxo de um copo de café, e do lado tem o nome do site coffee delivery"
          />
        </span>
      </NavLink>

      <nav>
        <NavLocation>
          <MapPin size={22} weight="fill" />
          São Paulo, SP
        </NavLocation>

        <NavLink to="/checkout">
          <NavCart title="Ir para Checkout">
            <ShoppingCart size={22} weight="fill" />
            <ItemsCount>3</ItemsCount>
          </NavCart>
        </NavLink>
      </nav>
    </HeaderContainer>
  );
}
