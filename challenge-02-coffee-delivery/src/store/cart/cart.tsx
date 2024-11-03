import { Item, Order, OrderInfo } from '@/types/Cart'
import { toast } from 'react-toastify'
import { create } from 'zustand'
import { persist, devtools } from 'zustand/middleware'

export interface ICartState {
  cartZ: Item[]
  orderZ?: Order
  addItemZ: (item: Item) => void
  removeItemZ: (itemId: Item['id']) => void
  incrementItemZ: (itemId: Item['id']) => void
  decrementItemZ: (itemId: Item['id']) => void
  checkoutZ: (orderInfo: OrderInfo) => void
  addLocalStorage: (order: Order) => void
}

// const myMiddlewares = (f) => devtools(persist(f, { name: 'cartStore' }))

export const useCartZustand = create<ICartState>()(
  devtools(
    persist(
      (set, get) => ({
        cartZ: [],
        orderZ: {
          id: 0,
          items: [],
          cep: '',
          street: '',
          fullAddress: '',
          number: '',
          neighborhood: '',
          city: '',
          state: '',
          paymentMethod: 'cash' || 'credit' || 'debit',
        },

        addItemZ: (item: Item) => {
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
          const ItemExist = get().cartZ.find(
            (cartItem) => cartItem.id === itemId,
          )
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
          const ItemExist = get().cartZ.find(
            (cartItem) => cartItem.id === itemId,
          )
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
          set({
            orderZ: [get().orderZ, newOrder],
          })
          // go to url success
        },

        addLocalStorage: (order) => {},
      }),
      { name: 'cartStore' },
    ),
  ),
)
