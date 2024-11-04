import styled from 'styled-components'
import orderInfoBg from '../../images/order-info-bg.png'
import addressIcon from '../../images/address-icon.png'
import deliveryIcon from '../../images/delivery-icon.png'
import paymentIcon from '../../images/payment-icon.png'

export const Container = styled.div`
  max-width: 1160px;
  margin: 0 auto;
  display: flex;
`

export const ContainerLeft = styled.div`
  h2 {
    color: ${({ theme }) => theme.colors.yellowDark};
    font-family: 'Baloo 2', sans-serif;
    font-size: 32px;
    line-height: 130%;
  }

  h3 {
    font-family: 'Roboto', sans-serif;
    color: ${({ theme }) => theme.colors.baseSubtitle};
    font-size: 20px;
    line-height: 130%;
  }

  p {
    font-family: 'Roboto', sans-serif;
    color: ${({ theme }) => theme.colors.baseSubtitle};
    font-size: 16px;
  }
`

export const OrderInfo = styled.div`
  width: 526px;
  height: 270px;
  background-repeat: no-repeat;
  background-position: center center;
  background-image: url(${orderInfoBg});
  padding: 40px;
  margin-top: 40px;
`

export const ContainerRight = styled.div`
  padding-top: 81px;
  padding-left: 55px;
`

export const IconDiv = styled.div`
  color: ${({ theme }) => theme.colors.baseText};
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  line-height: 130%;
  background-repeat: no-repeat;
  background-repeat: center left;
  height: 45px;
  padding-left: 45px;
  margin-bottom: 15px;
`

export const AddressInfo = styled(IconDiv)`
  background-image: url(${addressIcon});
`

export const DeliveryInfo = styled(IconDiv)`
  background-image: url(${deliveryIcon});
`

export const PaymentInfo = styled(IconDiv)`
  background-image: url(${paymentIcon});
`
