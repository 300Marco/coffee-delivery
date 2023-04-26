import styled from 'styled-components';
import { device } from '../../styles/devices/device';

export const CheckoutContainer = styled.main`
  margin-top: 9.25rem;
  width: 100%;
  max-width: 72rem;
  padding: 0 1rem 2rem;

  display: flex;
  gap: 2rem;

  @media ${device.mobileL} {
    flex-direction: column-reverse;
  }

  @media ${device.mobileS} {
    margin-top: 10.5rem;
  }
`;

export const TitleSection = styled.span`
  display: block;
  font-family: 'Baloo 2', sans-serif;
  font-size: 1.125rem;
  font-weight: 800;
  margin-bottom: 0.9375rem;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const FormBox = styled.div`
  border-radius: 6px;
  padding: 2.5rem;
  background-color: ${(props) => props.theme['gray-100']};
`;

export const MessagePaymentError = styled.span`
  margin-bottom: 0.5rem;
  font-size: 0.875rem;
  color: ${(props) => props.theme['red-alert']};

  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const ICON_COLORS = {
  yellow: 'yellow-500',
  purple: 'purple-300',
} as const;

interface IconProps {
  iconColor: keyof typeof ICON_COLORS;
}

export const TitleForm = styled.div<IconProps>`
  margin-bottom: 2rem;

  display: flex;
  gap: 0.5rem;

  svg {
    color: ${(props) => props.theme[ICON_COLORS[props.iconColor]]};
  }

  div {
    display: flex;
    flex-direction: column;
    gap: 0.125rem;

    span:last-child {
      font-size: 0.875rem;
    }
  }
`;

export const FormFields = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  input {
    font-size: 0.875rem;
    padding: 0.75rem;
    border-radius: 4px;
    border: 1px solid ${(props) => props.theme['gray-400']};
    background-color: ${(props) => props.theme['gray-300']};

    &::placeholder {
      color: ${(props) => props.theme['gray-600']};
    }

    &:focus {
      outline: 1px solid ${(props) => props.theme['yellow-500']};
    }
  }

  input[name='cep'] {
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }

  input[name='cep'],
  input[name='number'],
  input[name='neighborhood'] {
    width: 12.5rem;
  }

  input[name='complement'] {
    flex: 1;
    height: 2.6875rem;
  }

  input[name='city'] {
    width: 17.25rem;
  }

  input[name='uf'] {
    width: 3.75rem;
  }

  @media ${device.mobileL} {
    input {
      /* border: 1px solid green; */
      /* width: 100% !important; */
    }

    /* input[name='number'] { */
    /* width: 100%; */
    /* } */

    input[name='city'] {
      width: 14rem;
    }
  }

  @media ${device.mobileM} {
    input[name='neighborhood'],
    input[name='number'] {
      width: 100%;
    }

    input[name='city'] {
      width: 11rem;
    }
  }
`;

export const DivDisplay = styled.div`
  display: flex;
  flex-direction: column;

  span {
    color: ${(props) => props.theme['red-alert']};
    margin-top: 0.5rem;
    font-size: 0.875rem;
  }
`;

const BaseDivDisplay = styled.div`
  display: flex;
  gap: 0.75rem;

  span {
    color: ${(props) => props.theme['red-alert']};
  }

  @media ${device.mobileL} {
    flex-wrap: wrap;
  }
`;

export const FirstDivDisplay = styled(BaseDivDisplay)`
  position: relative;

  div {
    display: flex;
    flex-direction: column;

    span {
      margin-top: 0.5rem;
      font-size: 0.875rem;
    }
  }
`;

export const TagOptional = styled.span`
  position: absolute;
  font-size: 0.75rem;
  font-style: italic;
  color: ${(props) => props.theme['gray-600']} !important;
  top: 14px;
  right: 14px;

  @media ${device.mobileL} {
    top: 68px;
  }
`;

export const SecondaryDivDisplay = styled(BaseDivDisplay)`
  /* background-color: blue; */

  div {
    display: flex;
    flex-direction: column;

    span {
      margin-top: 0.5rem;
      font-size: 0.875rem;
    }
  }
`;

export const FormOfPayment = styled.section`
  display: flex;
  gap: 0.75rem;

  @media ${device.mobileL} {
    flex-direction: column-reverse;
  }

  label {
    width: 11.166875rem;
    padding: 1rem;
    font-size: 0.75rem;
    border-radius: 6px;
    cursor: pointer;
    border: 1px solid transparent;
    transition: background-color 300ms;
    background-color: ${(props) => props.theme['gray-400']};

    display: flex;
    align-items: center;
    gap: 0.75rem;

    &:hover {
      background-color: ${(props) => props.theme['gray-500']};
    }

    svg {
      color: ${(props) => props.theme['purple-300']};
    }

    @media ${device.mobileL} {
      width: 100%;
      justify-content: center;
    }
  }

  input[type='radio'] {
    position: absolute;
    clip: rect(0, 0, 0, 0);
    pointer-events: none;
  }

  input[type='radio']:checked + label {
    border: 1px solid ${(props) => props.theme['purple-300']};
    background-color: ${(props) => props.theme['purple-100']};
  }
`;

// export const ProductCard = styled.div`
//   border-radius: 6px 44px 6px 44px;
//   padding: 2.5rem;
//   background-color: ${(props) => props.theme['gray-100']};
// `;

// export const CardCoffee = styled.div`
//   width: 23rem;

//   display: flex;
//   align-items: start;
//   /* gap: 1.25rem; */

//   img {
//     width: 4rem;
//     margin-right: 1.25rem;
//   }
// `;

// export const NoCoffee = styled.div`
//   width: 23rem;
//   padding: 0 0 4rem;
//   text-align: center;
// `;

// export const ProductDetails = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 0.5rem;

//   div {
//     display: flex;
//     align-items: center;
//     gap: 0.5rem;
//   }

//   button {
//     font-size: 0.75rem;
//     text-transform: uppercase;
//     border: 0;
//     border-radius: 6px;
//     padding: 0.684rem 0.5rem;
//     cursor: pointer;
//     transition: background-color 300ms;
//     background-color: ${(props) => props.theme['gray-400']};

//     display: flex;
//     align-items: center;
//     gap: 0.25rem;

//     &:hover {
//       background-color: ${(props) => props.theme['gray-500']};
//     }

//     svg {
//       color: ${(props) => props.theme['purple-300']};
//     }
//   }
// `;

// export const AmountOfCoffee = styled.div`
//   background-color: ${(props) => props.theme['gray-400']};
//   border-radius: 6px;
//   padding: 0.5875rem 0.5rem;

//   display: flex;
//   align-items: center;
//   gap: 0.25rem;

//   input {
//     text-align: center;
//     border: none;
//     background-color: transparent;
//     pointer-events: none;
//     width: 0.75rem;
//     color: ${(props) => props.theme['gray-900']};

//     &::-webkit-outer-spin-button,
//     &::-webkit-inner-spin-button {
//       -webkit-appearance: none;
//       margin: 0;
//     }
//   }

//   svg {
//     color: ${(props) => props.theme['purple-300']};
//     cursor: pointer;
//     transition: color 300ms;

//     &:active {
//       color: ${(props) => props.theme['purple-500']};
//     }
//   }
// `;

// export const TotalPriceCoffee = styled.span`
//   font-weight: 700;
//   margin-left: 3.125rem;
//   color: ${(props) => props.theme['gray-700']};
// `;

// export const Divider = styled.span`
//   display: block;
//   border-bottom: 1px solid ${(props) => props.theme['gray-400']};

//   margin: 1.5rem 0;
// `;

// export const ConfirmOrderButton = styled.button`
//   width: 100%;
//   height: 2.875rem;
//   border: 0;
//   border-radius: 6px;
//   cursor: pointer;
//   font-weight: 700;
//   font-size: 0.875rem;
//   text-transform: uppercase;
//   transition: background-color 300ms;
//   color: ${(props) => props.theme.white};
//   background-color: ${(props) => props.theme['yellow-300']};

//   display: flex;
//   align-items: center;
//   justify-content: center;

//   &:hover {
//     background-color: ${(props) => props.theme['yellow-500']};
//   }
// `;
