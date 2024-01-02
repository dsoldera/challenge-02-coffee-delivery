import { useCart } from "@/lib/hooks/useCart";
import { useParams } from "react-router-dom";
import { ToastContainer } from "react-toastify";

export const ThankYou = () => {
  const { orders } = useCart();
  const { orderId } = useParams();
  const orderInfo = orders.find((order) => order.id === Number(orderId));
  console.log('orderInfo', orderInfo?.items);

  return (
    <>
    <h2>Obrigada pelo seu pedido</h2>
    <h3>Anote o número do seu pedido: { orderInfo?.id }</h3>
    </>
  )
}