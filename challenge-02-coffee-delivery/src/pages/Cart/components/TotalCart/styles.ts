import styled from 'styled-components';

export const Container = styled.div``;

export const CoffeeItem = styled.div`
  display: flex;
  justify-content: space-between;

  > div {
    > img {
      width: 64px;
      height: 64px;
    }

    display: flex;
    align-items: stretch;
    gap: 20px;

    > div {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
  }

  > aside {
    font-weight: bold;
  }
`

export const CoffeeInfo = styled.div`
  display: flex;
  gap: 8px;

  > button {
    padding: 6px 8px;
    background-color: yellow;
    border-radius: 6px;
    display: flex;
    align-items: center;
    gap: 8px;

    transition: all 0.2s;

    &:hover {
      background-color: blue;
    }

    > span {
      text-transform: uppercase;
      color: gray;
    }
  }
`

export const CartTotal = styled.div`
  padding: 40px;
  border-radius: 6px 36px;
  width: 100%;
  min-width: 448px;

  > span {
    display: block;
    height: 1px;
    background-color: red;
    margin: 24px 0;
  }
`