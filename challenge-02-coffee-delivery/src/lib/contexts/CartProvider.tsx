import { ReactNode, createContext, useReducer } from 'react'
import { Item, Order, OrderInfo } from '@/types/Cart'
import { useNavigate } from 'react-router-dom'
import { cartReducer } from '../reducer/reducer'
import {
  addItemAction,
  checkoutCartAction,
  decrementQuantityAction,
  incrementQuantityAction,
  removeItemAction,
} from '../reducer/actions'

interface CartContextType {
  cart: Item[]
  orders: Order[]
  addItemtoCart: (item: Item) => void
  removeItemCart: (itemId: Item['id']) => void
  decrementQuantity: (itemId: Item['id']) => void
  incrementQuantity: (itemId: Item['id']) => void
  checkout: (order: OrderInfo) => void
  addLocalStorage: () => void
}

export const CartContext = createContext({} as CartContextType)

interface CartContextProviderProps {
  children: ReactNode
}

export const CartContextProvider = ({ children }: CartContextProviderProps) => {
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
  const { cart, orders } = cartState

  const addItemtoCart = (item: Item) => {
    dispatch(addItemAction(item))
  }

  const removeItemCart = (itemId: Item['id']) => {
    dispatch(removeItemAction(itemId))
  }

  const incrementQuantity = (itemId: Item['id']) => {
    dispatch(incrementQuantityAction(itemId))
  }

  const decrementQuantity = (itemId: Item['id']) => {
    dispatch(decrementQuantityAction(itemId))
  }

  const checkout = (order: OrderInfo) => {
    dispatch(checkoutCartAction(order, navigate))
  }

  const addLocalStorage = async () => {
    if (cartState) {
      const stateJSON = JSON.stringify(cartState)
      await localStorage.setItem('@coffee-delivery:cart-state-1.0.0', stateJSON)
    }
  }

  return (
    <CartContext.Provider
      value={{
        addItemtoCart,
        removeItemCart,
        incrementQuantity,
        decrementQuantity,
        addLocalStorage,
        checkout,
        cart,
        orders,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
