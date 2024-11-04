import { useCart } from '@/hooks/useCart'
import { Order } from '@/types/Cart'
import { Helmet } from 'react-helmet-async'
import { useParams } from 'react-router-dom'
import {
  AddressInfo,
  Container,
  ContainerLeft,
  ContainerRight,
  DeliveryInfo,
  OrderInfo,
  PaymentInfo,
} from './styles'

export const ThankYouPage = () => {
  const { orders, addLocalStorage } = useCart()
  const { orderId } = useParams()
  const orderInfo = orders.find((order: Order) => order.id === Number(orderId))
  addLocalStorage(orders)

  const paymentMethod = {
    credit: 'Cartão de crédito',
    debit: 'Cartão de débito',
    cash: 'Dinheiro',
  }

  return (
    <Container>
      <ContainerLeft>
        <Helmet title="Obrigada" />
        <h2>Uhu! Pedido confirmado</h2>
        <h3>Agora é só aguardar que logo o café chegará até você</h3>
        <OrderInfo>
          <p>
            Anote o número do seu pedido: <strong>{orderInfo?.id}</strong>
          </p>
          <br />
          <AddressInfo>
            <p>
              Entrega em {orderInfo?.street}, {orderInfo?.number} <br />
              {orderInfo?.neighborhood} - {orderInfo?.city}, {orderInfo?.state}
            </p>
          </AddressInfo>

          <DeliveryInfo>
            <p>
              Previsão de entrega <br />
              <strong>20 min - 30</strong>
            </p>
          </DeliveryInfo>

          <PaymentInfo>
            <p>
              Pagamento na Entrega <br />
              <strong>{paymentMethod[orderInfo!.paymentMethod]}</strong>
            </p>
          </PaymentInfo>
        </OrderInfo>
      </ContainerLeft>
      <ContainerRight>
        <img src="/images/delivery.svg" alt="Café do Coffee Delivery" />
      </ContainerRight>
    </Container>
  )
}
