import { Header } from "@/components/Header/Header";
import { CartContainer, InfoContainer } from "./styles";
import { ToastContainer } from 'react-toastify';
import { Address } from "@/components/Address/Address";
import { Payment } from "@/components/Payment/Payment";
import { TotalCart } from "@/components/TotalCart/TotalCart";

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
      </InfoContainer>
      <ToastContainer autoClose={2000} />
    </CartContainer>
    </>
  )
}