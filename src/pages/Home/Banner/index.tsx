import { Coffee, Package, ShoppingCart, Timer } from '@phosphor-icons/react';

import coffeeBanner from '../../../assets/coffeeBanner.svg';

import {
  BannerContainer,
  BannerContent,
  BannerInformation,
  BannerIntro,
  ItemIcon,
  ItemInformation,
} from './styles';

export function Banner() {
  return (
    <BannerContainer>
      <BannerContent>
        <BannerIntro>
          <BannerInformation>
            <h2>Encontre o café perfeito para qualquer hora do dia</h2>
            <p>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </p>
          </BannerInformation>

          <ItemInformation>
            <span>
              <ItemIcon itemColor="yellowDark">
                <ShoppingCart size={16} weight="fill" />
              </ItemIcon>
              Compra simples e segura
            </span>
            <span>
              <ItemIcon itemColor="gray">
                <Package size={16} weight="fill" />
              </ItemIcon>
              Embalagem mantém o café intacto
            </span>
            <span>
              <ItemIcon itemColor="yellow">
                <Timer size={16} weight="fill" />
              </ItemIcon>
              Entrega rápida e rastreada
            </span>
            <span>
              <ItemIcon itemColor="purple">
                <Coffee size={16} weight="fill" />
              </ItemIcon>
              O café chega fresquinho até você
            </span>
          </ItemInformation>
        </BannerIntro>

        <div>
          <img src={coffeeBanner} alt="" />
        </div>
      </BannerContent>
    </BannerContainer>
  );
}
