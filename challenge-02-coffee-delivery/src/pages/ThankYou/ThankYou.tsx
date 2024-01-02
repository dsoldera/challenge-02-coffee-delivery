
import { Header } from "@/components/Header";
import { useCart } from "@/lib/hooks/useCart";
import { useParams } from "react-router-dom";

export const ThankYouPage = () => {
  const { orders } = useCart();
  // console.log('orders', orders);
  const { orderId } = useParams();
  const orderInfo = orders.find((order:any) => order.id === Number(orderId));

  return (
    <>
    <Header />
    <h2>Obrigada pelo seu pedido</h2>
    <h3>Anote o número do seu pedido: { orderInfo?.id }</h3>
    </>
  )
}