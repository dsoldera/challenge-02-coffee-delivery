import { Header } from "../../components/Header";
import { Address } from "../../components/Address";
import { Payment } from "../../components/Payment";
import { TotalCart } from "../../components/TotalCart";
import { CartContainer, CheckoutButton, InfoContainer } from "./styles";
import { ToastContainer } from 'react-toastify';

export const Cart = () => {
  return (
    <>
    <Header />
    <CartContainer>
      <InfoContainer>
        <h2>Complete seu pedido</h2>
        <Address />
        <Payment />
      </InfoContainer>
      <InfoContainer>
        <TotalCart />
        <CheckoutButton type="submit" form="order">
          Confirmar pedido
        </CheckoutButton>
      </InfoContainer>
      <ToastContainer autoClose={2000} />
    </CartContainer>
    </>
  )
}