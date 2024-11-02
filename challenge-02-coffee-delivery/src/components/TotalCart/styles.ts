import styled from 'styled-components'

export const ContainerTotal = styled.div``

export const CoffeeItem = styled.div`
  justify-content: space-between;
  font-family: 'Roboto', sans-serif;
  display: flex;
  gap: 20px;
  align-items: center;
  margin-bottom: 56px;

  > img {
    height: 64px;
    width: 64px;
  }
`

export const Price = styled.span`
  color: ${({ theme }) => theme.colors.baseText};
  font-size: 1rem;
  line-height: 130%;
  font-weight: bold;
  min-width: 80px;
  text-align: right;
`

export const CoffeeInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;

  > div {
    display: flex;
    width: 100%;
  }

  p {
    color: ${({ theme }) => theme.colors.baseText};
    font-size: 1rem;
    line-height: 130%;
    font-weight: normal;
    text-align: left;
    padding-bottom: 10px;
  }

  button {
    background-color: ${({ theme }) => theme.colors.baseButton};
    align-items: center;
    border-radius: 6px;
    padding: 6px 8px;
    display: flex;
    border: none;
    gap: 8px;

    transition: all 0.2s;

    &:hover {
      background-color: ${({ theme }) => theme.colors.baseHover};
    }

    > svg {
      color: ${({ theme }) => theme.colors.purple};
    }

    > span {
      font-size: 12px;
    }
  }
`

export const CartTotal = styled.div`
  min-width: 400px;
  width: 100%;

  > span {
    background-color: ${({ theme }) => theme.colors.baseButton};
    background-color: red;
    margin: 24px 0;
    display: block;
    height: 1px;
  }
`

export const CartTotalInfo = styled.div`
  flex-direction: column;
  display: flex;
  gap: 12px;

  div {
    justify-content: space-between;
    align-items: center;
    display: flex;

    span {
      font-family: 'Baloo 2', sans-serif;
      font-size: 14px;
      line-height: 140%;
      font-weight: 400;
    }
  }

  > div:last-child {
    span {
      font-family: 'Baloo 2', sans-serif;
      line-height: 130%;
      font-size: 1.25rem;
      font-weight: bold;
    }
  }
`
