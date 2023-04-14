import styled from 'styled-components';

export const SuccessContainer = styled.section`
  width: 72rem;
  padding: 0 1rem 1rem;
  margin-top: 5rem;

  display: flex;
  flex-direction: column;
  gap: 2.5rem;
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
`;

const BaseBoxDelivery = styled.div`
  width: 32.875rem;
  border: 0;
  border-radius: 6px 36px 6px 36px;
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
