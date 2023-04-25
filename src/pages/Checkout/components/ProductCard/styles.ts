import styled from 'styled-components';

export const ProductCardContainer = styled.div`
  border-radius: 6px 44px 6px 44px;
  padding: 2.5rem;
  background-color: ${(props) => props.theme['gray-100']};
`;

export const CardCoffeeContainer = styled.div`
  max-height: 28.5rem;
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  padding-right: 5px;
  margin-bottom: 8px;

  &::-webkit-scrollbar {
    width: 3px;
  }

  &::-webkit-scrollbar-track {
    border-radius: 20px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme['gray-500']};
    border-radius: 20px;
  }
`;

export const CardCoffee = styled.div`
  width: 23rem;

  display: flex;
  align-items: start;
  /* gap: 1.25rem; */

  img {
    width: 4rem;
    margin-right: 1.25rem;
  }
`;

export const NoCoffee = styled.div`
  width: 23rem;
  padding: 0 0 4rem;
  text-align: center;
`;

export const ProductDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  div {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  button {
    font-size: 0.75rem;
    text-transform: uppercase;
    border: 0;
    border-radius: 6px;
    padding: 0.684rem 0.5rem;
    cursor: pointer;
    transition: background-color 300ms;
    background-color: ${(props) => props.theme['gray-400']};

    display: flex;
    align-items: center;
    gap: 0.25rem;

    &:hover {
      background-color: ${(props) => props.theme['gray-500']};
    }

    svg {
      color: ${(props) => props.theme['purple-300']};
    }
  }
`;

export const AmountOfCoffee = styled.div`
  background-color: ${(props) => props.theme['gray-400']};
  border-radius: 6px;
  padding: 0.5875rem 0.5rem;

  display: flex;
  align-items: center;
  gap: 0.25rem;

  input {
    text-align: center;
    border: none;
    background-color: transparent;
    pointer-events: none;
    width: 0.75rem;
    color: ${(props) => props.theme['gray-900']};

    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }

  svg {
    color: ${(props) => props.theme['purple-300']};
    cursor: pointer;
    transition: color 300ms;

    &:active {
      color: ${(props) => props.theme['purple-500']};
    }
  }
`;

export const TotalPriceCoffee = styled.span`
  font-weight: 700;
  margin-left: 3.125rem;
  color: ${(props) => props.theme['gray-700']};
`;

export const Divider = styled.span`
  display: block;
  border-bottom: 1px solid ${(props) => props.theme['gray-400']};

  margin: 1.5rem 0;
`;

export const BaseConfirmButton = styled.button`
  width: 100%;
  height: 2.875rem;
  border: 0;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 700;
  font-size: 0.875rem;
  text-transform: uppercase;
  transition: background-color 300ms;
  color: ${(props) => props.theme.white};

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ConfirmOrderButton = styled(BaseConfirmButton)`
  background-color: ${(props) => props.theme['yellow-300']};

  &:hover {
    background-color: ${(props) => props.theme['yellow-500']};
  }
`;

export const ConfirmOrderButtonBlocked = styled(BaseConfirmButton)`
  background-color: ${(props) => props.theme['gray-500']};
  cursor: not-allowed;
`;
