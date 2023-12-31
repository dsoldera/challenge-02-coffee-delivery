import { Address } from "./components/Address"
import { Payment } from "./components/Payment"
import { TotalCart } from "./components/TotalCart"
import { CartContainer } from "./styles"

export const Cart = () => {
  return (
    <>
    <CartContainer>
      <h1>Cart</h1>
      <Address />
      <Payment />
      <TotalCart />
    </CartContainer>
    </>
  )
}