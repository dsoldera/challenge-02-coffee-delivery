import styled from 'styled-components'

export const CartContainer = styled.div`
  max-width: 1160px;
  margin: 0 auto;
  padding: 40px 20px;

  > form {
    display: flex;
    gap: 32px;
  }
`

export const FormsContainer = styled.div`
  font-family: 'Baloo 2', sans-serif;
  width: 100%;
`
export const ContainerTotal = styled(FormsContainer)`
  min-width: 554px;

  h2 {
    color: ${({ theme }) => theme.colors.baseSubtitle};
    font-family: 'Baloo 2', sans-serif;
    font-size: 18px;
    line-height: 130%;
    font-weight: bold;
    margin-bottom: 15px;
  }
`

export const CheckoutButton = styled.button`
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.yellow};
  font-family: 'Roboto', sans-serif;
  text-transform: uppercase;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 700;
  font-size: 14px;
  margin-top: 24px;
  padding: 12px;
  border: none;
  width: 100%;

  transition: all 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.yellowDark};
  }
`
export const TotalCartContainer = styled(ContainerTotal)`
  border-radius: 6px 36px;
  background-color: ${({ theme }) => theme.colors.baseCard};
  padding: 40px;
`
export const PaymentContainer = styled(FormsContainer)`
  padding: 40px;
  background-color: ${({ theme }) => theme.colors.baseCard};
`
export const PaymentHeading = styled.div`
  display: flex;
  margin-bottom: 32px;

  h3 {
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    font-weight: normal;
    color: ${({ theme }) => theme.colors.baseSubtitle};
  }

  p {
    font-family: 'Roboto', sans-serif;
    font-size: 14px;
    font-weight: normal;
    color: ${({ theme }) => theme.colors.baseText};
  }

  svg {
    color: ${({ theme }) => theme.colors.purple};
  }
`

export const PaymentOptions = styled.div`
  display: flex;
  gap: 8px;
  justify-content: space-between;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 12px;
  }
`

export const PaymentErrorMessage = styled.p`
  font-family: 'Baloo 2', sans-serif;
  font-size: 1.125rem;
  line-height: 130%;
  font-weight: 400;
  color: red;
`

export const AddressContainer = styled(FormsContainer)`
  background-color: ${({ theme }) => theme.colors.baseCard};
  padding: 40px;
  margin-bottom: 10px;

  h2 {
    color: gray;
    margin: 0;
  }
`
export const AddressHeading = styled.div`
  display: flex;
  font-family: 'Roboto', sans-serif;

  div {
    margin-left: 8px;
    margin-bottom: 32px;
  }

  h3 {
    font-size: 16px;
    color: ${({ theme }) => theme.colors.baseSubtitle};
    font-weight: normal;
  }
  p {
    color: ${({ theme }) => theme.colors.baseText};
    font-weight: normal;
    font-size: 14px;
  }

  svg {
    color: ${({ theme }) => theme.colors.yellowDark};
  }
`

export const AddressForm = styled.div`
  grid-template-columns: 200px 1fr 60px;
  grid-gap: 16px 12px;
  grid-template-areas:
    'cep . .'
    'street street street'
    'number fullAddress fullAddress'
    'neighborhood city state';
  display: grid;
`
