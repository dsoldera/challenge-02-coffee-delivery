import { useCartZustand } from '@/store/cart/cart'
import { Helmet } from 'react-helmet-async'
import { useParams } from 'react-router-dom'

export const ThankYouPage = () => {
  const { orderZ } = useCartZustand()
  console.log('orders', orderZ)

  const { orderId } = useParams()
  const orderInfo = orderZ?.find((order) => order === Number(orderId))

  const paymentMethod = {
    credit: 'Cartão de crédito',
    debit: 'Cartão de débito',
    cash: 'Dinheiro',
  }

  return (
    <>
      <Helmet title="Obrigada" />
      <h2>Obrigada pelo seu pedido</h2>
      <h3>Anote o número do seu pedido: {orderInfo?.id}</h3>
    </>
  )
}
