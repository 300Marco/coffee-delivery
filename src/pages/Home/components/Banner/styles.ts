import styled from 'styled-components';
import backgroundImageBanner from '../../../../assets/backgroundImageBanner.svg';
import { device } from '../../../../styles/devices/device';

export const BannerContainer = styled.section`
  width: 100%;

  padding: 5.75rem 0;
  background-image: url(${backgroundImageBanner});
  background-position: 30% 45%;
  background-repeat: no-repeat;
  background-size: cover;

  display: flex;
  align-items: start;
  justify-content: center;

  @media ${device.mobileL} {
    flex-direction: column;
  }
`;

export const BannerIntro = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4.125rem;
`;

export const BannerContent = styled.div`
  max-width: 72rem;
  padding: 0 1rem;

  display: flex;
  justify-content: space-between;
  gap: 3.5rem;

  img {
    width: 29.75rem;
    height: 22.5rem;
  }

  @media ${device.mobileL} {
    flex-direction: column-reverse;

    img {
      width: 100%;
      height: 100%;
    }
  }
`;

export const BannerInformation = styled.div`
  h2 {
    font-size: 3rem;
    line-height: 130%;
    font-family: 'Baloo 2', sans-serif;
    font-weight: 800;
    margin-bottom: 1rem;
    color: ${(props) => props.theme['gray-900']};
  }

  p {
    font-size: 1.25rem;
    color: ${(props) => props.theme['gray-800']};
  }

  @media ${device.mobileS} {
    h2 {
      font-size: 2.5rem;
    }
  }
`;

export const ItemInformation = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  row-gap: 1.25rem;
  justify-content: space-between;

  span {
    font-size: 1rem;

    display: flex;
    align-items: center;
    gap: 0.75rem;
  }

  @media ${device.mobileS} {
    display: flex;
    flex-direction: column;
  }
`;

const ITEMS_COLORS = {
  yellow: 'yellow-300',
  yellowDark: 'yellow-500',
  gray: 'gray-700',
  purple: 'purple-300',
} as const;

interface ItemsProps {
  itemColor: keyof typeof ITEMS_COLORS;
}

export const ItemIcon = styled.span<ItemsProps>`
  border-radius: 50%;
  padding: 8px;
  color: ${(props) => props.theme.white};
  background-color: ${(props) => props.theme[ITEMS_COLORS[props.itemColor]]};
`;
