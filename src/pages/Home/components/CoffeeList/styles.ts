import styled from 'styled-components';

export const CoffeeContainer = styled.section`
  width: 100%;
  max-width: 72rem;
  padding: 2rem 1rem;

  h3 {
    font-size: 2rem;
    font-family: 'Baloo 2', sans-serif;
    font-weight: 800;
    color: ${(props) => props.theme['gray-800']};
  }
`;

export const CoffeeCardContainer = styled.div`
  margin-top: 3.375rem;

  display: grid;
  grid-template-columns: repeat(auto-fit, 16rem);
  column-gap: 2rem;
  row-gap: 2.5rem;
`;

export const CoffeeCard = styled.div`
  border-radius: 6px 36px 6px 36px;
  background-color: ${(props) => props.theme['gray-100']};
  padding: 0 1.25rem 1.25rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    margin-top: -20px;
  }

  h4 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 1.25rem;
    font-weight: 800;
    color: ${(props) => props.theme['gray-800']};
  }

  p {
    margin: 0.5rem 0 2.0625rem;
    font-size: 0.875rem;
    text-align: center;
    color: ${(props) => props.theme['gray-600']};
  }
`;

export const CoffeeTag = styled.span`
  display: flex;
  align-items: center;
  gap: 0.25rem;

  span {
    margin: 0.75rem 0 1rem;
    padding: 0.25rem 0.5rem;
    border-radius: 100px;
    font-size: 0.625rem;
    font-family: 'Baloo 2', sans-serif;
    text-transform: uppercase;
    background-color: ${(props) => props.theme['yellow-100']};
    color: ${(props) => props.theme['yellow-500']};
  }
`;

export const BuyContainer = styled.div`
  width: 100%;
  color: ${(props) => props.theme['gray-700']};

  display: flex;
  align-items: center;
  justify-content: space-between;

  span:nth-child(1) {
    font-size: 0.875rem;

    span {
      font-size: 1.5rem;
      font-weight: 800;
      font-family: 'Baloo 2', sans-serif;
    }
  }
`;

export const AddToCart = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

export const CartButton = styled.button`
  border: none;
  padding: 0.5rem;
  border-radius: 6px;
  cursor: pointer;
  color: ${(props) => props.theme['gray-100']};
  background-color: ${(props) => props.theme['purple-500']};
  transition: background-color 300ms;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background-color: ${(props) => props.theme['purple-300']};
  }
`;
