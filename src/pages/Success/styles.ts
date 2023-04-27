import styled from 'styled-components';
import { device } from '../../styles/devices/device';

export const SuccessContainer = styled.section`
  width: 72rem;
  padding: 0 1rem 1rem;
  margin-top: 11.75rem;

  display: flex;
  flex-direction: column;
  gap: 2.5rem;

  @media ${device.laptop} {
    width: 100%;
  }

  @media ${device.mobileL} {
    margin-top: 6.25rem;
  }

  @media ${device.mobileS} {
    margin-top: 10.5rem;
  }
`;

export const MessageBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;

  h3 {
    font-family: 'Baloo 2', sans-serif;
    font-size: 2rem;
    line-height: 130%;
    color: ${(props) => props.theme['yellow-500']};
  }

  p {
    font-size: 1.25rem;
  }
`;

export const DeliveryInformation = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media ${device.laptop} {
    flex-direction: column-reverse;
  }

  @media ${device.mobileL} {
    img {
      width: 100%;
    }
  }
`;

const BaseBoxDelivery = styled.div`
  width: 32.875rem;
  border: 0;
  border-radius: 6px 36px 6px 36px;

  @media ${device.mobileL} {
    width: 100%;
  }
`;

export const BoxDeliveryBackground = styled(BaseBoxDelivery)`
  background: #fff;
  background: linear-gradient(
    315deg,
    ${(props) => props.theme['yellow-300']} 0%,
    ${(props) => props.theme['purple-300']} 80%
  );
  background: -webkit-linear-gradient(
    315deg,
    ${(props) => props.theme['yellow-300']} 0%,
    ${(props) => props.theme['purple-300']} 80%
  );

  padding: 1px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const BoxDeliveryInformation = styled(BaseBoxDelivery)`
  padding: 2.4375rem;
  background-color: ${(props) => props.theme['white-300']};

  img {
    width: 30.75rem;
  }
`;

export const FinalData = styled.div`
  margin-bottom: 2rem;

  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

export const ItemIcon = styled.span`
  border-radius: 50%;
  padding: 8px;
  width: 2rem;
  height: 2rem;
  color: ${(props) => props.theme.white};
  background-color: ${(props) => props.theme['purple-300']};

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const DeliveryData = styled.div`
  display: flex;
  flex-direction: column;

  span {
    line-height: 130%;
  }
`;

// export const BoxForHomePage = styled.div`
//   width: 100%;

//   display: flex;
//   justify-content: end;

//   a {
//     color: ${(props) => props.theme['purple-300']};

//     display: flex;
//     align-items: center;
//     gap: 0.2rem;

//     &:hover {
//       color: ${(props) => props.theme['purple-500']};
//     }
//   }
// `;
