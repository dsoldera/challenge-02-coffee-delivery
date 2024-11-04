import { ToastContainer, toast } from 'react-toastify'
import { TotalCart } from '@/components/TotalCart/TotalCart'
import { SubmitHandler, useForm } from 'react-hook-form'
import { FormInputs } from '@/types/Address'
import { useCart } from '@/hooks/useCart'
import {
  AddressContainer,
  AddressForm,
  AddressHeading,
  CartContainer,
  CheckoutButton,
  ContainerTotal,
  PaymentContainer,
  PaymentErrorMessage,
  PaymentHeading,
  PaymentOptions,
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
import { PaymentRadio, TextInput } from '@/components/Form'

export const CartPage = () => {
  const { cart, checkout } = useCart()
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormInputs>({
    resolver: zodResolver(addressPaymentNewOrder),
  })

  const selectedPaymentMethod = watch('paymentMethod')

  const handleOrderCheckout: SubmitHandler<FormInputs> = (data) => {
    // console.log('handle data', data)
    // console.log('cart', cart)

    if (cart.length === 0) {
      toast.error('Selecione Produtos para seu carrinho!!!', {
        position: toast.POSITION.TOP_CENTER,
      })
      return
    }
    checkout(data)
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
                  type="text"
                  error={errors.cep}
                  placeholder="CEP"
                  {...register('cep')}
                />

                <TextInput
                  stylesProps={{ style: { gridArea: 'street' } }}
                  type="text"
                  error={errors.street}
                  placeholder="Rua"
                  {...register('street')}
                />

                <TextInput
                  stylesProps={{ style: { gridArea: 'number' } }}
                  type="number"
                  error={errors.number}
                  placeholder="Número"
                  {...register('number')}
                />

                <TextInput
                  stylesProps={{ style: { gridArea: 'fullAddress' } }}
                  type="text"
                  error={errors.fullAddress}
                  placeholder="Complemento"
                  {...register('fullAddress')}
                />

                <TextInput
                  stylesProps={{ style: { gridArea: 'neighborhood' } }}
                  type="text"
                  error={errors.neighborhood}
                  placeholder="Bairro"
                  {...register('neighborhood')}
                />

                <TextInput
                  stylesProps={{ style: { gridArea: 'city' } }}
                  type="text"
                  error={errors.city}
                  placeholder="Cidade"
                  {...register('city')}
                />

                <TextInput
                  stylesProps={{ style: { gridArea: 'state' } }}
                  type="text"
                  error={errors.state}
                  placeholder="UF"
                  {...register('state')}
                />
              </AddressForm>
            </AddressContainer>
            <PaymentContainer>
              <PaymentHeading>
                <CurrencyDollar size={22} />
                <div>
                  <h3>Pagamento</h3>
                  <p>
                    O pagamento é feito na entrega. Escolha a forma que deseja
                    pagar
                  </p>
                </div>
              </PaymentHeading>
              <PaymentOptions>
                <PaymentRadio
                  isSelected={selectedPaymentMethod === 'credit'}
                  {...register('paymentMethod')}
                  value="credit"
                >
                  <CreditCard size={16} />
                  <span>Cartão de crédito</span>
                </PaymentRadio>

                <PaymentRadio
                  isSelected={selectedPaymentMethod === 'debit'}
                  {...register('paymentMethod')}
                  value="debit"
                >
                  <Bank size={16} />
                  <span>Cartão de débito</span>
                </PaymentRadio>

                <PaymentRadio
                  isSelected={selectedPaymentMethod === 'cash'}
                  {...register('paymentMethod')}
                  value="cash"
                >
                  <Money size={16} />
                  <span>Dinheiro</span>
                </PaymentRadio>

                {errors.paymentMethod ? (
                  <PaymentErrorMessage role="alert">
                    {errors.paymentMethod.message}
                  </PaymentErrorMessage>
                ) : null}
              </PaymentOptions>
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
