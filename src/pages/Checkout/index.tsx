// import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as zod from 'zod';

import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from '@phosphor-icons/react';

// import { CoffeesContext } from '../../contexts/CoffeesContext';
// import { AmountOfCoffee } from '../../components/AmountOfCoffee';
// import { TotalOrderBalance } from './components/TotalOrderBalance';

import { ProductCard } from './components/ProductCard';

import {
  CheckoutContainer,
  FormBox,
  FormContainer,
  TitleForm,
  TitleSection,
  FormFields,
  FormOfPayment,
} from './styles';

const deliveryAddressValidationSchema = zod.object({
  cep: zod.number().min(8, 'Informe corretamente o CEP com 8 dígitos'),
  road: zod.string().min(3, 'Informe o nome da rua'),
  number: zod.number().min(1).max(10),
  complement: zod.string().min(1).max(100).optional(),
  neighborhood: zod.string().min(1).max(30),
  city: zod.string().min(1).max(28),
  uf: zod.string().min(2).max(2),
});

type deliveryAddress = zod.infer<typeof deliveryAddressValidationSchema>;

export function Checkout() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<deliveryAddress>({
    resolver: zodResolver(deliveryAddressValidationSchema),
  });

  function handleDeliveryAddress(data: deliveryAddress) {
    console.log(data);
  }

  return (
    <CheckoutContainer>
      <section>
        <TitleSection>Complete seu pedido</TitleSection>

        <form
          action=""
          id="myForm"
          onSubmit={handleSubmit(handleDeliveryAddress)}
        >
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
                <input
                  type="number"
                  placeholder="CEP"
                  min={1}
                  {...register('cep', { valueAsNumber: true })}
                />

                <input
                  type="text"
                  placeholder="Rua"
                  min={1}
                  {...register('road')}
                />

                <div>
                  <input
                    type="text"
                    placeholder="Número"
                    min={1}
                    {...register('number')}
                  />
                  <input
                    type="text"
                    placeholder="Complemento"
                    {...register('complement')}
                  />
                  <span>Opcional</span>
                </div>

                <div>
                  <input
                    type="text"
                    placeholder="Bairro"
                    min={1}
                    {...register('neighborhood')}
                  />
                  <input
                    type="text"
                    placeholder="Cidade"
                    min={1}
                    {...register('city')}
                  />
                  <input
                    type="text"
                    placeholder="UF"
                    min={1}
                    {...register('uf')}
                  />
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

        <ProductCard />

        {/* <ProductCard>
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

          <ConfirmOrderButton>Confirmar pedido</ConfirmOrderButton>
        </ProductCard> */}
      </section>
    </CheckoutContainer>
  );
}
