import styled from 'styled-components';

export const HeaderContainer = styled.header`
  padding: 2rem 0;

  display: flex;
  align-items: center;
  justify-content: space-between;

  nav {
    display: flex;
    gap: 0.75rem;
  }
`;

const BaseButtonHeader = styled.span`
  border-radius: 6px;
  padding: 0.5rem;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const NavLocation = styled(BaseButtonHeader)`
  background-color: ${(props) => props.theme['purple-100']};
  color: ${(props) => props.theme['purple-500']};

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;

  svg {
    color: ${(props) => props.theme['purple-300']};
  }
`;

export const NavCart = styled(BaseButtonHeader)`
  position: relative;
  background-color: ${(props) => props.theme['yellow-100']};
  color: ${(props) => props.theme['yellow-500']};
`;

export const ItemsCount = styled.span`
  position: absolute;
  top: -0.5rem;
  right: -0.5rem;

  background: red;
  border-radius: 50%;
  width: 1.25rem;
  height: 1.25rem;
  font-weight: 700;
  font-size: 0.75rem;
  color: ${(props) => props.theme.white};
  background-color: ${(props) => props.theme['yellow-500']};

  display: flex;
  align-items: center;
  justify-content: center;
`;
