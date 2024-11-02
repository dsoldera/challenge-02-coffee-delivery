import { ToastContainer, toast } from 'react-toastify'
import { TotalCart } from '@/components/TotalCart/TotalCart'
import { SubmitHandler, useForm } from 'react-hook-form'
import { FormInputs } from '@/types/Address'
import { useCart } from '@/lib/hooks/useCart'
import {
  AddressContainer,
  AddressForm,
  AddressHeading,
  CartContainer,
  CheckoutButton,
  ContainerTotal,
  ContainerTotal2,
  PaymentContainer,
  PaymentHeading,
  TotalCartContainer,
} from './styles'
import { Helmet } from 'react-helmet-async'
import { zodResolver } from '@hookform/resolvers/zod'
import { addressPaymentNewOrder } from '@/types/Cart'
import {
  MapPin,
  Bank,
  CreditCard,
  CurrencyDollar,
  Money,
} from '@phosphor-icons/react'
import { TextInput } from '@/components/Form'

export const CartPage = () => {
  const { cart } = useCart()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>({
    resolver: zodResolver(addressPaymentNewOrder),
  })

  const handleOrderCheckout: SubmitHandler<FormInputs> = (data) => {
    console.log('handle data', data)

    if (cart.length === 0) {
      toast.error('Selecione Produtos para seu carrinho!!!', {
        position: toast.POSITION.TOP_CENTER,
      })
    }
    // checkout(data)
  }

  return (
    <>
      <Helmet title="Carrinho" />
      <CartContainer>
        <form id="order" onSubmit={handleSubmit(handleOrderCheckout)}>
          <ContainerTotal>
            <h2>Complete seu pedido</h2>
            <AddressContainer>
              <AddressHeading>
                <MapPin size={22} />
                <div>
                  <h3>Endereço de Entrega</h3>
                  <p>Informe o endereço onde deseja receber o seu pedido</p>
                </div>
              </AddressHeading>
              <AddressForm>
                <TextInput
                  stylesProps={{ style: { gridArea: 'cep' } }}
                  type="number"
                  error={errors.cep}
                  placeholder="CEP"
                  {...register('cep')}
                />
              </AddressForm>
            </AddressContainer>
            <PaymentContainer>
              <PaymentHeading>
                <CurrencyDollar size={22} />
                <div>
                  <span>Pagamento</span>
                  <p>
                    O pagamento é feito na entrega. Escolha a forma que deseja
                    pagar
                  </p>
                </div>
              </PaymentHeading>
            </PaymentContainer>
          </ContainerTotal>
          <ContainerTotal>
            <h2>Cafés selecionados</h2>
            <TotalCartContainer>
              <TotalCart />
              <CheckoutButton type="submit">Confirmar pedido</CheckoutButton>
            </TotalCartContainer>
          </ContainerTotal>
          <ToastContainer autoClose={2000} />
        </form>
      </CartContainer>
    </>
  )
}
