import styled from 'styled-components';
import { device } from '../../styles/devices/device';

export const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${device.mobileL} {
    margin-bottom: 3rem;
  }
`;
