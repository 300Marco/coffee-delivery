import styled from 'styled-components';
import { device } from '../../styles/devices/device';

export const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) and (max-width: 1023px) {
    margin-bottom: 3rem;
  }

  @media ${device.mobileL} {
    margin-bottom: 3rem;
  }
`;
