import styled from 'styled-components'
import { BannerTitle } from '../Card/components/Address/styles'
import { FormsContainer } from '@/pages/Cart/styles'

export const PaymentContainer = styled(FormsContainer)``

export const PaymentHeading = styled(BannerTitle)`
  svg {
    color: ${({ theme }) => theme.colors.purple};
  }
`

export const PaymentOptions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

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
