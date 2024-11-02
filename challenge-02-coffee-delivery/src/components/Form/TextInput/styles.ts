import styled from 'styled-components'

export const Container = styled.div`
  input {
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    padding: 12px;
    background-color: ${({ theme }) => theme.colors.baseInput};
    color: ${({ theme }) => theme.colors.baseText};
    border-style: solid;
    border-color: ${({ theme }) => theme.colors.baseButton};
    border-radius: 4px;
    margin-bottom: 5px;
    width: 100%;
  }
`

export const ErrorMessage = styled.p`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  color: red;
  font-size: 12px;
  margin-left: 5px;
`
