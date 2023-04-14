import { CurrencyDollar, MapPin, Timer } from '@phosphor-icons/react';
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

export function Success() {
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
                  Entrega em <strong>Rua João Daniel Martinelli, 102</strong>
                </span>
                <span>Farrapos - Porto Alegre, RS</span>
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
                  <strong>Cartão de Crédito</strong>
                </span>
              </DeliveryData>
            </FinalData>
          </BoxDeliveryInformation>
        </BoxDeliveryBackground>

        <img src={motorbike} alt="" />
      </DeliveryInformation>
    </SuccessContainer>
  );
}
