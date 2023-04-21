import styled from 'styled-components';

export const TotalOrderBalanceContainer = styled.section`
  margin-bottom: 1.5rem;

  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  div:not(:last-child) {
    display: flex;
    justify-content: space-between;

    span:first-child {
      font-size: 0.875rem;
    }
  }

  div:last-child {
    display: flex;
    justify-content: space-between;

    span {
      font-size: 1.25rem;
      font-weight: 700;
    }
  }
`;
