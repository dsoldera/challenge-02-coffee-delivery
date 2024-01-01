import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  max-width: 256px;
`;

export const CoffeeImg = styled.img`
  margin-top: -20px;
  max-width: 120px;
  max-height: 120px;
  align-self: center;
`

export const Title = styled.h3`
  margin: 16px 0 0;
`;

export const Description = styled.span`
  margin-top: 8px;
  width: 100%;
`;

export const Tags = styled.div`
  margin-top: 12px;
  font-size: 8px;
  display: flex;
  align-items: center;
  align-self: center;
  gap: 4px;

  span {
    padding: 4px 8px;
    border-radius: 100px;
    text-transform: uppercase;
  }
`

export const OrderSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 15px 0 0;
`

export const Price = styled.div`
  display: flex;
  align-items: baseline;
  gap: 2px;
`

export const Order = styled.div<{ $itemAdded?: boolean }>`
  display: flex;
  align-items: center;
  gap: 8px;

  > button {
    background-color: yellow;
    transition: background-color 0.2s;
    border-radius: 6px;
    padding: 8px;
    display: flex;

    &:hover {
      background-color: purple;
    }
  }
`