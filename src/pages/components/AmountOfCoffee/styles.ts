import styled from 'styled-components';

export const AmountOfCoffeeContainer = styled.div`
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
    width: 1.25rem;
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

    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
  }
`;
