import { ReactNode, createContext, useEffect, useReducer } from "react";
import { Item, Order } from "@/types/Cart";
import { useNavigate } from "react-router-dom";
import { cartReducer } from "../reducer/reducer";
import { addItemAction, decrementQuantityAction, incrementQuantityAction, removeItemAction } from "../reducer/actions";

interface CartContextType {
  cart: Item[];
  orders: Order[];
  addItemtoCart: (item: Item) => void;
  removeItemCart: (itemId: Item['id']) => void;
  decrementQuantity: (itemId: Item['id']) => void;
  incrementQuantity: (itemId: Item['id']) => void;
}

export const CartContext = createContext({} as CartContextType);

interface CartContextProviderProps {
  children: ReactNode;
}

export const CartContextProvider = ({
  children
 }: CartContextProviderProps) => {
  const [cartState, dispatch] = useReducer(
    cartReducer,
    {
      cart: [],
      orders: [],
    },
    (cartState) => {
      const storedStateAsJSON = localStorage.getItem(
        '@coffee-delivery:cart-state-1.0.0',
      )

      if (storedStateAsJSON) {
        return JSON.parse(storedStateAsJSON)
      }

      return cartState
    },
  )
  const navigate = useNavigate()
  const { cart, orders } = cartState;

  function addItemtoCart (item: Item) {
    console.log('addItem CartProvider', item);
    dispatch(addItemAction(item))
  }

  function removeItemCart(itemId: Item['id']) {
    dispatch(removeItemAction(itemId))
  }

  function incrementQuantity(itemId: Item['id']) {
    dispatch(incrementQuantityAction(itemId))
  }

  function decrementQuantity(itemId: Item['id']) {
    dispatch(decrementQuantityAction(itemId))
  }

  useEffect(() => {
    if (cartState) {
      const stateJSON = JSON.stringify(cartState)

      localStorage.setItem('@coffee-delivery:cart-state-1.0.0', stateJSON)
    }
  }, [cartState]);

  return (
    <CartContext.Provider 
      value={{
        addItemtoCart,
        removeItemCart,
        incrementQuantity,
        decrementQuantity,
        cart,
        orders,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
