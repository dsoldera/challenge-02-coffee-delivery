import styled from 'styled-components'

export const Container = styled.label`
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.baseButton};
  border: 1px solid transparent;
  transition: all 0.2s;
  align-items: center;
  border-radius: 6px;
  padding: 16px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.baseHover};
  }

  &[data-state='true'] {
    background-color: ${({ theme }) => theme.colors.purpleLight};
    border-color: ${({ theme }) => theme.colors.purple};
  }

  input {
    display: none;
  }

  span {
    font-size: 12px;
    color: ${({ theme }) => theme.colors.baseText};
    font-family: 'Roboto';
    font-family: 'Baloo 2', sans-serif;
    font-weight: 400;
    text-transform: uppercase;
    line-height: 130%;
    margin-left: 5px;
  }

  svg {
    color: ${({ theme }) => theme.colors.purple};
  }
`
