import { PiMinus, PiPlus } from "react-icons/pi"
import { QuantityCardProps } from "@/types/Card"
import { Container } from "./styles"

export const Quantity = ({ quantity, incrementQuantity, decrementQuantity}: QuantityCardProps) => {

  return (
    <Container>
      <button onClick={decrementQuantity}>
        <PiMinus size={12} />
      </button>
      <span>{quantity}</span>
      <button onClick={incrementQuantity}>
        <PiPlus size={12} />
      </button>
    </Container>
  )
}