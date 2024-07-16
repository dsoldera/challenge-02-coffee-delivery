import styled from 'styled-components'

export const Container = styled.label`
  background-color: ${({ theme }) => theme.colors['base-button']};
  color: ${({ theme }) => theme.colors['base-text']};
  font-family: 'Baloo 2', sans-serif;
  border: 1px solid transparent;
  text-transform: uppercase;
  transition: all 0.2s;
  align-items: center;
  border-radius: 6px;
  font-size: 1.5rem;
  line-height: 130%;
  font-weight: 800;
  padding: 16px;
  width: 100%;
  display: flex;
  gap: 12px;

  &:hover {
    background-color: ${({ theme }) => theme.colors['base-hover']};
  }

  &[data-state='true'] {
    background-color: ${({ theme }) => theme.colors['purple-light']};
    border-color: ${({ theme }) => theme.colors.purple};
  }

  input {
    display: none;
  }

  span {
    font-size: 12px;
    font-family: 'Roboto';
    font-weight: 400;
    line-height: 130%;
  }

  svg {
    color: ${({ theme }) => theme.colors.purple};
  }
`
