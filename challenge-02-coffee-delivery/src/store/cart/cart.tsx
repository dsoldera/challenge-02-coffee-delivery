import { Item, Order, OrderInfo } from '@/types/Cart'
import { toast } from 'react-toastify'
import { create } from 'zustand'

export interface ICartState {
  cartZ: Item[]
  orderZ?: unknown
  addItemZ: (item: Item) => void
  removeItemZ: (itemId: Item['id']) => void
  incrementItemZ: (itemId: Item['id']) => void
  decrementItemZ: (itemId: Item['id']) => void
  checkoutZ: (orderInfo: OrderInfo) => void
  addLocalStorage: (order: Order) => void
}

export const useCartZustand = create<ICartState>((set, get) => ({
  cartZ: [],
  storedStateAsJSONZ: localStorage.getItem('@coffee-delivery:cart-state-1.0.0'),

  addItemZ: (item) => {
    set((state: ICartState) => ({
      cartZ: [...state.cartZ, item],
    }))
    toast.success('Coffee Adicionado ao Carrinho!', {
      position: toast.POSITION.TOP_CENTER,
    })
  },

  removeItemZ: (item) => {
    set((state: ICartState) => ({
      cartZ: state.cartZ.filter((cart) => cart.id !== item),
    }))
    toast.success('Coffee Removido!', {
      position: toast.POSITION.TOP_CENTER,
    })
  },

  incrementItemZ: (itemId: string) => {
    const ItemExist = get().cartZ.find((cartItem) => cartItem.id === itemId)
    if (ItemExist) {
      if (typeof ItemExist.quantity === 'number') {
        ItemExist.quantity++
      }

      set({ cartZ: [...get().cartZ] })
    } else {
      set({ cartZ: [...get().cartZ, { id: itemId, quantity: +1 }] })
    }

    toast.success('Quantidade adicionada!', {
      position: toast.POSITION.TOP_CENTER,
    })
  },

  decrementItemZ: (itemId) => {
    const ItemExist = get().cartZ.find((cartItem) => cartItem.id === itemId)
    if (ItemExist) {
      if (typeof ItemExist.quantity === 'number') {
        ItemExist.quantity--
      }

      set({ cartZ: [...get().cartZ] })
    } else {
      set({ cartZ: [...get().cartZ, { id: itemId, quantity: -1 }] })
    }
    toast.success('Quantidade reduzida!', {
      position: toast.POSITION.TOP_CENTER,
    })
  },
  checkoutZ: (orderInfo) => {
    const newOrder: Order = {
      id: new Date().getTime(),
      items: [...get().cartZ],
      ...orderInfo,
    }
    console.log(newOrder)
    set({ orderZ: [get().orderZ, newOrder] })
    console.log(get().orderZ)
    // go to url success
  },

  addLocalStorage: (order) => {},
}))
