import styled from 'styled-components';

export const AmountOfCoffeeContainer = styled.div`
  background-color: ${(props) => props.theme['gray-400']};
  border-radius: 6px;
  padding: 0.5875rem 0.5rem;

  display: flex;
  align-items: center;
  gap: 0.595rem;

  span {
    text-align: center;
    font-size: 1rem;
    color: ${(props) => props.theme['gray-900']};
  }

  svg {
    color: ${(props) => props.theme['purple-300']};
    cursor: pointer;
    transition: color 300ms;

    &:hover {
      color: ${(props) => props.theme['purple-500']};
    }

    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
  }
`;
