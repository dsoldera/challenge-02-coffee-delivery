import { useCart } from '@/hooks/useCart'
import { Order } from '@/types/Cart'
import { Helmet } from 'react-helmet-async'
import { useParams } from 'react-router-dom'

export const ThankYouPage = () => {
  const { orders, addLocalStorage } = useCart()
  console.log('orders', orders)

  addLocalStorage(orders)
  const { orderId } = useParams()
  const orderInfo = orders.find((order: Order) => order.id === Number(orderId))

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
