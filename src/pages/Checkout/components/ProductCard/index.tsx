import { useContext } from 'react';
import { Navigate } from 'react-router-dom';

import { Trash } from '@phosphor-icons/react';

import { CoffeesContext } from '../../../../contexts/CoffeesContext';
import { DeliveryContext } from '../../../../contexts/DeliveryContext';
import { AmountOfCoffee } from '../../../../components/AmountOfCoffee';
import { TotalOrderBalance } from '../TotalOrderBalance';

import {
  ProductCardContainer,
  CardCoffee,
  NoCoffee,
  TotalPriceCoffee,
  ProductDetails,
  Divider,
  ConfirmOrderButton,
} from './styles';

export function ProductCard() {
  const { coffee, updateCoffeeList } = useContext(CoffeesContext);
  const { delivery } = useContext(DeliveryContext);

  let link: string = '';

  if (delivery.length !== 0) link = '/success';

  function removeCoffee(id: string) {
    updateCoffeeList(id);
  }

  return (
    <ProductCardContainer>
      {coffee.length > 0 ? (
        coffee.map((coffee) => {
          return (
            <div key={coffee.id}>
              <CardCoffee>
                <img src={`./coffees/${coffee.image}`} alt="" />
                <ProductDetails>
                  <span>{coffee.title}</span>
                  <div>
                    <AmountOfCoffee
                      quantityCheckout={coffee.quantity}
                      idCheckout={coffee.id}
                    />

                    <button
                      onClick={() => {
                        removeCoffee(coffee.id);
                      }}
                    >
                      <Trash size={16} /> Remover
                    </button>
                  </div>
                </ProductDetails>

                <TotalPriceCoffee>
                  R${' '}
                  {coffee.totalPrice.toLocaleString('pt-br', {
                    minimumFractionDigits: 2,
                  })}
                </TotalPriceCoffee>
              </CardCoffee>
              <Divider></Divider>
            </div>
          );
        })
      ) : (
        <NoCoffee>Nenhum café selecionado</NoCoffee>
      )}

      <TotalOrderBalance />

      <ConfirmOrderButton type="submit" form="myForm">
        Confirmar pedido
      </ConfirmOrderButton>

      {link && <Navigate to="/success" />}
    </ProductCardContainer>
  );
}
