import { PiMinus, PiPlus } from 'react-icons/pi'
import { QuantityCardProps } from '@/types/Card'
import { ContainerQuantity } from './styles'

export const Quantity = ({
  quantity,
  incrementQuantity,
  decrementQuantity,
}: QuantityCardProps) => {
  return (
    <ContainerQuantity>
      <button type="button" onClick={decrementQuantity}>
        <PiMinus size={12} />
      </button>
      <span>{quantity}</span>
      <button type="button" onClick={incrementQuantity}>
        <PiPlus size={12} />
      </button>
    </ContainerQuantity>
  )
}
