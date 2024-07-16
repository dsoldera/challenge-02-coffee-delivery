import { Header } from '@/components/Header/Header'
import { ToastContainer, toast } from 'react-toastify'
import { Address } from '@/components/Address/Address'
import { Payment } from '@/components/Payment/Payment'
import { TotalCart } from '@/components/TotalCart/TotalCart'
import { SubmitHandler, useForm } from 'react-hook-form'
import { FormInputs } from '@/types/Address'
import { useCart } from '@/lib/hooks/useCart'
import { CartContainer, InfoContainer } from './styles'
import { Helmet } from 'react-helmet-async'

export const CartPage = () => {
  const { checkout, cart } = useCart()
  const { handleSubmit } = useForm<FormInputs>()

  const handleOrderCheckout: SubmitHandler<FormInputs> = (data) => {
    if (cart.length === 0) {
      toast.error('Selecione Produtos para seu carrinho!!!', {
        position: toast.POSITION.TOP_CENTER,
      })
      return
    }
    console.log('handle data', data)
    checkout(data)
  }

  return (
    <>
      <Helmet title="Carrinho" />
      <CartContainer>
        <InfoContainer>
          <h2>Complete seu pedido</h2>
          <form id="order" onSubmit={handleSubmit(handleOrderCheckout)}>
            <Address />
            <Payment />
          </form>
        </InfoContainer>
        <InfoContainer>
          <TotalCart />
        </InfoContainer>
        <ToastContainer autoClose={2000} />
      </CartContainer>
    </>
  )
}
