import styled from 'styled-components';

export const CartContainer = styled.div`
  display: flex;
  max-width: 1160px;
  padding: 40px 20px;
  margin: 0 auto;
  gap: 32px;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  h2 {
    color: gray;
    margin: 0;
  }

  > form {
    display: flex;
    flex-direction: column;
    gap: 32px;
  }
`;
