import styled from 'styled-components'

export const AddressContainer = styled.div``

export const BannerTitle = styled.div`
  display: flex;
  gap: 8px;

  div {
    span {
      color: ${({ theme }) => theme.colors['base-subtitle']};
    }

    p {
    }
  }
`
export const AddressHeading = styled(BannerTitle)`
  svg {
    color: ${({ theme }) => theme.colors['yellow-dark']};
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
