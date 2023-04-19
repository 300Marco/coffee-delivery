import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
  Trash,
} from '@phosphor-icons/react';

import {
  CheckoutContainer,
  FormBox,
  FormContainer,
  TitleForm,
  TitleSection,
  FormFields,
  FormOfPayment,
  ProductCard,
  CardCoffee,
  TotalPriceCoffee,
  ProductDetails,
  Divider,
  PurchaseDetails,
  ConfirmOrderButton,
} from './styles';

import coffeeExpressoTradicional from '../../assets/coffee-expresso-tradicional.svg';
import { AmountOfCoffee } from '../../components/AmountOfCoffee';

export function Checkout() {
  return (
    <CheckoutContainer>
      <section>
        <TitleSection>Complete seu pedido</TitleSection>

        <form action="">
          <FormContainer>
            <FormBox>
              <TitleForm iconColor={'yellow'}>
                <MapPinLine size={22} />
                <div>
                  <span>Endereço de Entrega</span>
                  <span>
                    Informe o endereço onde deseja receber o seu pedido
                  </span>
                </div>
              </TitleForm>

              <FormFields>
                <input name="cep" type="number" placeholder="CEP" min={1} />
                <input name="road" type="text" placeholder="Rua" min={1} />

                <div>
                  <input
                    name="number"
                    type="text"
                    placeholder="Número"
                    min={1}
                  />
                  <input
                    name="complement"
                    type="text"
                    placeholder="Complemento"
                  />
                  <span>Opcional</span>
                </div>

                <div>
                  <input
                    name="neighborhood"
                    type="text"
                    placeholder="Bairro"
                    min={1}
                  />
                  <input name="city" type="text" placeholder="Cidade" min={1} />
                  <input name="uf" type="text" placeholder="UF" min={1} />
                </div>
              </FormFields>
            </FormBox>

            <FormBox>
              <TitleForm iconColor={'purple'}>
                <CurrencyDollar size={22} />

                <div>
                  <span>Pagamento</span>
                  <span>
                    O pagamento é feito na entrega. Escolha a forma que deseja
                    pagar
                  </span>
                </div>
              </TitleForm>

              <FormOfPayment>
                <input type="radio" id="creditCard" name="option" />
                <label htmlFor="creditCard">
                  <CreditCard size={16} />
                  CARTÃO DE CRÉDITO
                </label>

                <input type="radio" id="debitCard" name="option" />
                <label htmlFor="debitCard">
                  <Bank size={16} />
                  CARTÃO DE DÉBITO
                </label>

                <input type="radio" id="money" name="option" />
                <label htmlFor="money">
                  <Money size={16} />
                  DINHEIRO
                </label>
              </FormOfPayment>
            </FormBox>
          </FormContainer>
        </form>
      </section>

      <section>
        <TitleSection>Cafés selecionados</TitleSection>

        <ProductCard>
          <CardCoffee>
            <img src={coffeeExpressoTradicional} alt="" />

            <ProductDetails>
              <span>Expresso Tradicional</span>
              <div>
                <AmountOfCoffee />

                <button>
                  <Trash size={16} /> Remover
                </button>
              </div>
            </ProductDetails>
            <TotalPriceCoffee>R$ 9,90</TotalPriceCoffee>
          </CardCoffee>

          <Divider></Divider>

          <CardCoffee>
            <img src={coffeeExpressoTradicional} alt="" />

            <ProductDetails>
              <span>Expresso Tradicional</span>
              <div>
                <AmountOfCoffee />

                <button>
                  <Trash size={16} /> Remover
                </button>
              </div>
            </ProductDetails>
            <TotalPriceCoffee>R$ 9,90</TotalPriceCoffee>
          </CardCoffee>

          <Divider></Divider>

          <PurchaseDetails>
            <div>
              <span>Total de Itens</span>
              <span>R$ 19,80</span>
            </div>

            <div>
              <span>Entrega</span>
              <span>R$ 3,50</span>
            </div>

            <div>
              <span>Total</span>
              <span>R$ 23,30</span>
            </div>
          </PurchaseDetails>

          <ConfirmOrderButton>Confirmar pedido</ConfirmOrderButton>
        </ProductCard>
      </section>
    </CheckoutContainer>
  );
}
