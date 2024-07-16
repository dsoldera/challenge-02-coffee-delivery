import styled from 'styled-components'

export const ContainerTotal = styled.div`
  h2 {
    color: ${({ theme }) => theme.colors['base-subtitle']};
    font-family: 'Baloo 2', sans-serif;
    font-size: 1.125rem;
    line-height: 130%;
    font-weight: 700;
    margin-bottom: 15px;
  }
`

export const CoffeeItem = styled.div`
  justify-content: space-between;
  display: flex;

  span {
    color: ${({ theme }) => theme.colors['base-text']};
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    line-height: 130%;
    font-weight: normal;
  }

  > div {
    > img {
      height: 64px;
      width: 64px;
    }

    align-items: stretch;
    display: flex;
    gap: 20px;

    > div {
      justify-content: space-between;
      flex-direction: column;
      display: flex;
    }
  }
`

export const CoffeeInfo = styled.div`
  display: flex;
  gap: 8px;

  > button {
    background-color: ${({ theme }) => theme.colors['base-button']};
    align-items: center;
    border-radius: 6px;
    padding: 6px 8px;
    display: flex;
    border: none;
    gap: 8px;

    transition: all 0.2s;

    &:hover {
      background-color: ${({ theme }) => theme.colors['base-hover']};
    }

    > svg {
      color: ${({ theme }) => theme.colors.purple};
    }

    > span {
      color: ${({ theme }) => theme.colors['base-text']};
      font-family: 'Baloo 2', sans-serif;
      text-transform: uppercase;
      font-size: 14px;
      line-height: 130%;
      font-weight: 400;
    }
  }
`

export const CartTotal = styled.div`
  background-color: ${({ theme }) => theme.colors['base-card']};
  border-radius: 6px 36px;
  min-width: 400px;
  padding: 40px;
  width: 100%;

  > span {
    background-color: ${({ theme }) => theme.colors['base-button']};
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

export const CheckoutButton = styled.button`
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.yellow};
  font-family: 'Roboto', sans-serif;
  text-transform: uppercase;
  border-radius: 6px;
  line-height: 160%;
  font-weight: 700;
  margin-top: 24px;
  font-size: 14px;
  padding: 12px;
  border: none;
  width: 100%;

  transition: all 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.colors['yellow-dark']};
  }
`
