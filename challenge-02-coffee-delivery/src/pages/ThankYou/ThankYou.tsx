import { useCart } from '@/lib/hooks/useCart'
import { Order } from '@/types/Cart'
import { Helmet } from 'react-helmet-async'
import { useParams } from 'react-router-dom'

export const ThankYouPage = () => {
  const { orders } = useCart()
  console.log('orders', orders)
  const { orderId } = useParams()
  const orderInfo = orders.find((order: Order) => order.id === Number(orderId))

  return (
    <>
      <Helmet title="Obrigada" />
      <h2>Obrigada pelo seu pedido</h2>
      <h3>Anote o número do seu pedido: {orderInfo?.id}</h3>
    </>
  )
}
