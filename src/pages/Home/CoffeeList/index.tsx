import { useState } from 'react';

import { ShoppingCart } from '@phosphor-icons/react';
import nextId from 'react-id-generator';

import {
  CoffeeContainer,
  CoffeeCardContainer,
  CoffeeCard,
  CoffeeTag,
  BuyContainer,
  AddToCart,
  CartButton,
} from './styles';

import { AmountOfCoffee } from '../../components/AmountOfCoffee';

interface CoffeesProps {
  id: string;
  image: string;
  tags: string[];
  title: string;
  paragraph: string;
  price: number;
}

const coffees: CoffeesProps[] = [
  {
    id: '1',
    image: 'expresso-tradicional.png',
    tags: ['Tradicional'],
    title: 'Expresso Tradicional',
    paragraph: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.9,
  },
  {
    id: '2',
    image: 'expresso-americano.png',
    tags: ['Tradicional'],
    title: 'Expresso Americano',
    paragraph: 'Expresso diluído, menos intenso que o tradicional',
    price: 9.9,
  },
  {
    id: '3',
    image: 'expresso-cremoso.png',
    tags: ['Tradicional'],
    title: 'Expresso Cremoso',
    paragraph: 'Café expresso tradicional com espuma cremosa',
    price: 9.9,
  },
  {
    id: '4',
    image: 'expresso-gelado.png',
    tags: ['Tradicional', 'Gelado'],
    title: 'Expresso Gelado',
    paragraph: 'Bebida preparada com café expresso e cubos de gelo',
    price: 9.9,
  },
  {
    id: '5',
    image: 'cafe-leite.png',
    tags: ['Tradicional', 'Com leite'],
    title: 'Café com Leite',
    paragraph: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: 9.9,
  },
  {
    id: '6',
    image: 'latte.png',
    tags: ['Tradicional', 'Com leite'],
    title: 'Latte',
    paragraph:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: 9.9,
  },
  {
    id: '7',
    image: 'capuccino.png',
    tags: ['Tradicional', 'Com leite'],
    title: 'Capuccino',
    paragraph:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: 9.9,
  },
  {
    id: '8',
    image: 'macchiato.png',
    tags: ['Tradicional', 'Com leite'],
    title: 'Macchiato',
    paragraph: 'Café expresso misturado com um pouco de leite quente e espuma',
    price: 9.9,
  },
  {
    id: '9',
    image: 'mocaccino.png',
    tags: ['Tradicional', 'Com leite'],
    title: 'Mocaccino',
    paragraph: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: 9.9,
  },
  {
    id: '10',
    image: 'chocolate-quente.png',
    tags: ['Especial', 'Com leite'],
    title: 'Chocolate Quente',
    paragraph: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: 9.9,
  },
  {
    id: '11',
    image: 'cubano.png',
    tags: ['Especial', 'Alcoólico', 'Gelado'],
    title: 'Cubano',
    paragraph:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: 9.9,
  },
  {
    id: '12',
    image: 'havaiano.png',
    tags: ['Especial'],
    title: 'Havaiano',
    paragraph: 'Bebida adocicada preparada com café e leite de coco',
    price: 9.9,
  },
  {
    id: '13',
    image: 'arabe.png',
    tags: ['Especial'],
    title: 'Árabe',
    paragraph: 'Bebida preparada com grãos de café árabe e especiarias',
    price: 9.9,
  },
  {
    id: '14',
    image: 'irlandes.png',
    tags: ['Especial', 'Alcoólico'],
    title: 'Irlandês',
    paragraph: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: 9.9,
  },
];

export function CoffeeList() {
  const [selectedCoffees, setSelectedCoffees] = useState<CoffeesProps[]>([]);

  function getCoffeeId(id: string) {
    const getSelectedCoffee: CoffeesProps = coffees.find(
      (coffee) => coffee.id === id,
    )!;

    const selectedCoffeeFilter: boolean =
      selectedCoffees.indexOf(getSelectedCoffee) > -1;

    if (selectedCoffeeFilter === false) {
      setSelectedCoffees((state) => [...state, getSelectedCoffee]);
    }
  }

  console.log(selectedCoffees);

  return (
    <CoffeeContainer>
      <h3>Nossos Cafés</h3>

      <CoffeeCardContainer>
        {coffees.map((coffee) => {
          return (
            <CoffeeCard key={coffee.id}>
              <img src={`./coffees/${coffee.image}`} alt="" />

              <CoffeeTag>
                {coffee.tags.map((tag) => {
                  const tagId = nextId();

                  return <span key={tagId}>{tag}</span>;
                })}
              </CoffeeTag>

              <h4>{coffee.title}</h4>

              <p>{coffee.paragraph}</p>

              <BuyContainer>
                <span>
                  R${' '}
                  <span>
                    {coffee.price.toLocaleString('pt-br', {
                      minimumFractionDigits: 2,
                    })}
                  </span>
                </span>
                <AddToCart>
                  <AmountOfCoffee />

                  <CartButton onClick={() => getCoffeeId(coffee.id)}>
                    <ShoppingCart size={22} weight="fill" />
                  </CartButton>
                </AddToCart>
              </BuyContainer>
            </CoffeeCard>
          );
        })}
      </CoffeeCardContainer>
    </CoffeeContainer>
  );
}
