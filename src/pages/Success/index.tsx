import { useContext, useEffect, useState } from 'react';
import { CurrencyDollar, MapPin, Timer } from '@phosphor-icons/react';

import { DeliveryContext } from '../../contexts/DeliveryContext';
import { CoffeesContext } from '../../contexts/CoffeesContext';
import motorbike from '../../assets/illustration-motorbike.svg';

import {
  BoxDeliveryBackground,
  BoxDeliveryInformation,
  DeliveryData,
  DeliveryInformation,
  FinalData,
  ItemIcon,
  MessageBox,
  SuccessContainer,
} from './styles';
// import { Link, NavLink } from 'react-router-dom';

export function Success() {
  const { delivery } = useContext(DeliveryContext);
  const { resetCoffeeList } = useContext(CoffeesContext);

  const { road, number, neighborhood, city, uf, payment } = delivery[0];

  const [mount, setMount] = useState(false);

  useEffect(() => {
    if (!mount) {
      setMount(true);
      console.log('Cheguei aqui');
      resetCoffeeList();
    }
  }, [resetCoffeeList, mount]);

  return (
    <SuccessContainer>
      <MessageBox>
        <h3>Uhu! Pedido confirmado</h3>
        <p>Agora é só aguardar que logo o café chegará até você</p>
      </MessageBox>

      <DeliveryInformation>
        <BoxDeliveryBackground>
          <BoxDeliveryInformation>
            <FinalData>
              <ItemIcon>
                <MapPin size={16} weight="fill" />
              </ItemIcon>

              <DeliveryData>
                <span>
                  Entrega em{' '}
                  <strong>
                    {road}, {number}
                  </strong>
                </span>
                <span>
                  {neighborhood} - {city}, {uf}
                </span>
              </DeliveryData>
            </FinalData>

            <FinalData>
              <ItemIcon>
                <Timer size={16} weight="fill" />
              </ItemIcon>

              <DeliveryData>
                <span>Previsão de entrega</span>
                <span>
                  <strong>20 min - 30 min</strong>
                </span>
              </DeliveryData>
            </FinalData>

            <FinalData>
              <ItemIcon>
                <CurrencyDollar size={16} />
              </ItemIcon>

              <DeliveryData>
                <span>Pagamento na entrega</span>
                <span>
                  <strong>{payment}</strong>
                </span>
              </DeliveryData>
            </FinalData>

            {/* <BoxForHomePage>
              <NavLink to="/">
                <PlusCircle size={20} />
                Quero mais café
              </NavLink>
            </BoxForHomePage> */}
          </BoxDeliveryInformation>
        </BoxDeliveryBackground>

        <img src={motorbike} alt="" />
      </DeliveryInformation>
    </SuccessContainer>
  );
}
