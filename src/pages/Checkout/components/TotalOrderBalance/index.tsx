import { useContext } from 'react';

import { CoffeesContext } from '../../../../contexts/CoffeesContext';
import { TotalOrderBalanceContainer } from './styles';

export function TotalOrderBalance() {
  const { coffee } = useContext(CoffeesContext);

  const totalItems = coffee.reduce((total, coffee) => {
    total += coffee.totalPrice;

    return total;
  }, 0);

  const totalPrice = totalItems + 3.5;

  return (
    <TotalOrderBalanceContainer>
      <div>
        <span>Total de Itens</span>
        <span>
          R${' '}
          {totalItems.toLocaleString('pt-br', {
            minimumFractionDigits: 2,
          })}
        </span>
      </div>

      <div>
        <span>Entrega</span>
        <span>R$ 3,50</span>
      </div>

      <div>
        <span>Total</span>
        <span>
          R${' '}
          {totalPrice.toLocaleString('pt-br', {
            minimumFractionDigits: 2,
          })}
        </span>
      </div>
    </TotalOrderBalanceContainer>
  );
}
