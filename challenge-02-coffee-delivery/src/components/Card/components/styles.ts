import styled from 'styled-components'

export const ContainerQuantity = styled.div`
  background-color: ${({ theme }) => theme.colors['base-button']};
  border-radius: 6px;
  display: flex;
  padding: 8px;
  gap: 4px;

  button {
    background: transparent;
    align-items: center;
    border: none;
    display: flex;
  }

  button svg {
    color: ${({ theme }) => theme.colors.purple};

    transition: all 0.2s;

    &:hover {
      color: ${({ theme }) => theme.colors['purple-dark']};
    }
  }

  span {
    padding-top: 2px;
    color: ${({ theme }) => theme.colors['base-title']};
  }
`

export const CoffeeImg = styled.img`
  margin-top: -20px;
  max-width: 120px;
  max-height: 120px;
  align-self: center;
`
