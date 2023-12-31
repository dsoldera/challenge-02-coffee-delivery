import { ReactNode, createContext } from "react";
import { Item, Order } from "../../types/Cart";

interface CartContextType {
  cart: Item[];
  orders: Order[];
}

export const CartContext = createContext({} as CartContextType);

interface CartContextProviderProps {
  children: ReactNode;
}

export function CartContextProvider({ children }: CartContextProviderProps) {
  return (
    <CartContext.Provider value={{}} >
      {children}
    </CartContext.Provider>
  )
}