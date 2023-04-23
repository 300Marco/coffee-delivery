import { useState } from 'react';

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

import { ProductCard } from './components/ProductCard';

import {
  CheckoutContainer,
  FormBox,
  FormContainer,
  TitleForm,
  TitleSection,
  FormFields,
  FormOfPayment,
  FirstDivDisplay,
  SecondaryDivDisplay,
  TagOptional,
  DivDisplay,
} from './styles';

const deliveryAddressValidationSchema = zod.object({
  cep: zod
    .string()
    .min(9, 'Informe corretamente o CEP com 8 dígitos')
    .max(9, 'Informe corretamente o CEP com 8 dígitos'),
  road: zod.string().min(3, 'Informe o nome da rua'),
  number: zod.string().min(1, 'Informe no mínimo 1 caractere'),
  complement: zod.string().max(100).optional(),
  neighborhood: zod.string().min(3, 'Informe no mínimo 3 caracteres').max(30),
  city: zod.string().min(3, 'Informe no mínimo 3 caracteres').max(28),
  uf: zod
    .string()
    .min(2, 'Informe 2 caracteres')
    .max(2, 'Informe 2 caracteres'),
});

type deliveryAddress = zod.infer<typeof deliveryAddressValidationSchema>;

export function Checkout() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<deliveryAddress>({
    resolver: zodResolver(deliveryAddressValidationSchema),
    defaultValues: {
      cep: '',
      road: '',
      number: '',
      complement: '',
      neighborhood: '',
      city: '',
      uf: '',
    },
  });

  function handleDeliveryAddress(data: deliveryAddress) {
    // console.log(data);
    // console.log(getCepData);
  }

  const cepMask = watch('cep')
    .replace(/\D/g, '')
    .replace(/(\d{5})(\d)/, '$1-$2');
  const getCep = cepMask.replace(/[-]/g, '');

  const [getCepData, setGetCepData] = useState<string[] | any>([]);

  register('cep', {
    onBlur: (e) => {
      const url = `https://viacep.com.br/ws/${getCep}/json`;
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          const checkCep: boolean =
            data.cep === undefined && cepMask.length !== 0;

          const deliveryData = {
            cep: data.cep,
            road: data.logradouro,
            neighborhood: data.bairro,
            city: data.localidade,
            uf: data.uf,
            cepValidation: checkCep,
          };

          setGetCepData(deliveryData);
        });
    },
  });

  const { road, neighborhood, city, uf, cepValidation } = getCepData;

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
                <DivDisplay>
                  <input
                    type="string"
                    placeholder="CEP"
                    value={cepMask}
                    {...register('cep')}
                  />
                  {errors.cep && <span>{errors.cep.message}</span>}
                  {cepValidation && <span>CEP informado inválido</span>}
                </DivDisplay>

                <DivDisplay>
                  <input
                    type="text"
                    placeholder="Rua"
                    {...register('road')}
                    value={road}
                  />
                  {errors.road && <span>{errors.road.message}</span>}
                </DivDisplay>

                <FirstDivDisplay>
                  <div>
                    <input
                      type="text"
                      placeholder="Número"
                      {...register('number')}
                    />
                    {errors.number && <span>{errors.number.message}</span>}
                  </div>

                  <input
                    type="text"
                    placeholder="Complemento"
                    {...register('complement')}
                  />
                  {errors.complement && (
                    <span>{errors.complement.message}</span>
                  )}

                  <TagOptional>Opcional</TagOptional>
                </FirstDivDisplay>

                <SecondaryDivDisplay>
                  <div>
                    <input
                      type="text"
                      placeholder="Bairro"
                      {...register('neighborhood')}
                      value={neighborhood}
                    />
                    {errors.neighborhood && (
                      <span>{errors.neighborhood.message}</span>
                    )}
                  </div>

                  <div>
                    <input
                      type="text"
                      placeholder="Cidade"
                      {...register('city')}
                      value={city}
                    />
                    {errors.city && <span>{errors.city.message}</span>}
                  </div>

                  <div>
                    <input
                      type="text"
                      placeholder="UF"
                      {...register('uf')}
                      value={uf}
                    />
                    {errors.uf && <span>{errors.uf.message}</span>}
                  </div>
                </SecondaryDivDisplay>
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
