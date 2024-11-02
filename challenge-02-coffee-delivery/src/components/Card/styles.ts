import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.baseCard};
  border-radius: 6px 36px;
  flex-direction: column;
  padding: 0 20px 20px;
  text-align: center;
  max-width: 256px;
  display: flex;

  span {
    padding-top: 2px;
    color: black;
  }

  button {
    background-color: transparent;
    border: 1px solid gray;
    align-items: center;
    display: flex;
  }
`

export const CoffeeImg = styled.img`
  margin-top: -20px;
  width: 120px;
  height: 120px;
  align-self: center;
`

export const CoffeeTags = styled.div`
  margin-top: 12px;

  align-items: center;
  align-self: center;
  display: flex;
  gap: 4px;

  span {
    background-color: ${({ theme }) => theme.colors.yellowLight};
    color: ${({ theme }) => theme.colors.yellowDark};
    font-family: 'Roboto', sans-serif;
    text-transform: uppercase;
    border-radius: 100px;
    line-height: 130%;
    padding: 4px 8px;
    font-weight: 700;
    font-size: 10px;
  }
`

export const CoffeeTitle = styled.h3`
  color: ${({ theme }) => theme.colors.baseSubtitle};
  font-family: 'Baloo 2', sans-serif;
  font-size: 1.25rem;
  line-height: 130%;
  font-weight: 800;
  margin: 16px 0 0;
`

export const CoffeeDescription = styled.p`
  color: ${({ theme }) => theme.colors.baseLabel};
  font-family: 'Roboto', sans-serif;
  line-height: 130%;
  font-weight: 400;
  font-size: 14px;
  margin-top: 8px;
  margin-bottom: 30px;
  width: 100%;
`

export const CoffeeOrderSection = styled.div`
  justify-content: space-between;
  align-items: center;
  margin: 15px 0 0;
  display: flex;
`

export const CoffeePrice = styled.div`
  align-items: baseline;
  display: flex;
  gap: 2px;

  span:first-child {
    color: ${({ theme }) => theme.colors.baseText};
    font-family: 'Baloo 2', sans-serif;
    font-size: 1.25rem;
    line-height: 130%;
    font-weight: 700;
  }

  span:last-child {
    color: ${({ theme }) => theme.colors.baseText};
    font-family: 'Baloo 2', sans-serif;
    font-size: 1.5rem;
    line-height: 130%;
    font-weight: 800;
  }
`

export const CoffeeOrder = styled.div<{ $itemAdded?: boolean }>`
  align-items: center;
  display: flex;
  gap: 8px;

  > button {
    background-color: ${({ theme, $itemAdded }) =>
      $itemAdded ? theme.colors.yellowDark : theme.colors.purpleDark};
    transition: background-color 0.2s;
    border-radius: 6px;
    display: flex;
    padding: 8px;

    &:hover {
      background-color: ${({ theme, $itemAdded }) =>
        $itemAdded ? theme.colors.yellow : theme.colors.purple};
    }
  }
`
