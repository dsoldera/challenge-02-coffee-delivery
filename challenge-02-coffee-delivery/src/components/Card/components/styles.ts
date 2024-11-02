import styled from 'styled-components'

export const ContainerQuantity = styled.div`
  background-color: ${({ theme }) => theme.colors.baseButton};
  border-radius: 6px;
  display: flex;
  padding: 8px;
  gap: 8px;

  > span {
    min-width: inherit;
  }

  > button {
    background: transparent;
    align-items: center;
    display: flex;
    border: none;
    cursor: pointer;
  }

  button svg {
    color: ${({ theme }) => theme.colors.purple};

    transition: all 0.2s;

    &:hover {
      color: ${({ theme }) => theme.colors.purpleDark};
    }
  }

  span {
    padding-top: 2px;
    color: ${({ theme }) => theme.colors.baseTitle};
  }
`

export const CoffeeImg = styled.img`
  margin-top: -20px;
  max-width: 120px;
  max-height: 120px;
  align-self: center;
`
