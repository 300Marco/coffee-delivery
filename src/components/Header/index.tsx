import { MapPin, ShoppingCart } from '@phosphor-icons/react';

import logo from '../../assets/logoCoffeeDelivery.svg';

import { HeaderContainer, ItemsCount, NavCart, NavLocation } from './styles';

export function Header() {
  return (
    <HeaderContainer>
      <span>
        <img src={logo} alt="" />
      </span>

      <nav>
        <NavLocation>
          <MapPin size={22} weight="fill" />
          Porto Alegre, RS
        </NavLocation>

        <NavCart>
          <ShoppingCart size={22} weight="fill" />
          <ItemsCount>3</ItemsCount>
        </NavCart>
      </nav>
    </HeaderContainer>
  );
}
