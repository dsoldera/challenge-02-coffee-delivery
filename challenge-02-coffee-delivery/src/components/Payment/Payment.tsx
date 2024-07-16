import { Bank, CreditCard, CurrencyDollar, Money } from '@phosphor-icons/react'
import {
  PaymentContainer,
  PaymentErrorMessage,
  PaymentHeading,
  PaymentOptions,
} from './styles'
import { useForm } from 'react-hook-form'
import { FormInputs } from '@/types/Address'
import { zodResolver } from '@hookform/resolvers/zod'
import { newOrder } from '@/types/Cart'
import { PaymentRadio } from './components/PaymentRadio'

export const Payment = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormInputs>({
    resolver: zodResolver(newOrder),
  })

  const selectedPaymentMethod = watch('paymentMethod')

  return (
    <PaymentContainer>
      <PaymentHeading>
        <CurrencyDollar size={22} />

        <div>
          <span>Pagamento</span>
          <p>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </p>
        </div>
      </PaymentHeading>

      <PaymentOptions>
        <div>
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
        </div>

        {errors.paymentMethod ? (
          <PaymentErrorMessage role="alert">
            {errors.paymentMethod.message}
          </PaymentErrorMessage>
        ) : null}
      </PaymentOptions>
    </PaymentContainer>
  )
}
