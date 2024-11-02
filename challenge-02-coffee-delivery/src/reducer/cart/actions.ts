import { Item, OrderInfo } from '@/types/Cart'
import { ActionTypes } from '../../lib/enum/actions'
import { toast } from 'react-toastify'
import { NavigateFunction } from 'react-router-dom'

export type Actions =
  | {
      type: ActionTypes.ADD_ITEM
      payload: {
        item: Item
      }
    }
  | {
      type:
        | ActionTypes.DECREMENT_ITEM_QUANTITY
        | ActionTypes.INCREMENT_ITEM_QUANTITY
        | ActionTypes.REMOVE_ITEM
      payload: {
        itemId: Item['id']
      }
    }
  | {
      type: ActionTypes.CHECKOUT_CART
      payload: {
        order: OrderInfo
        callback: NavigateFunction
      }
    }
  | {
      type: ActionTypes.ADD_LOCALSTORAGE
      payload: {
        orders: OrderInfo[]
      }
    }

export const addItemAction = (item: Item) => {
  toast.success('Coffee Adicionado ao Carrinho!', {
    position: toast.POSITION.TOP_CENTER,
  })
  return {
    type: ActionTypes.ADD_ITEM,
    payload: {
      item,
    },
  } satisfies Actions
}

export const removeItemAction = (itemId: Item['id']) => {
  toast.success('Coffee Removido!', {
    position: toast.POSITION.TOP_CENTER,
  })
  return {
    type: ActionTypes.REMOVE_ITEM,
    payload: {
      itemId,
    },
  } satisfies Actions
}

export const incrementQuantityAction = (itemId: Item['id']) => {
  toast.success('Quantidade adicionada!', {
    position: toast.POSITION.TOP_CENTER,
  })
  return {
    type: ActionTypes.INCREMENT_ITEM_QUANTITY,
    payload: {
      itemId,
    },
  } satisfies Actions
}

export const decrementQuantityAction = (itemId: Item['id']) => {
  toast.success('Quantidade reduzida!', {
    position: toast.POSITION.TOP_CENTER,
  })
  return {
    type: ActionTypes.DECREMENT_ITEM_QUANTITY,
    payload: {
      itemId,
    },
  } satisfies Actions
}

export const checkoutCartAction = (
  order: OrderInfo,
  callback: NavigateFunction,
) => {
  return {
    type: ActionTypes.CHECKOUT_CART,
    payload: {
      order,
      callback,
    },
  } satisfies Actions
}

export const addLocalStorageAction = (orders: OrderInfo[]) => {
  return {
    type: ActionTypes.ADD_LOCALSTORAGE,
    payload: {
      orders,
    },
  } satisfies Actions
}
