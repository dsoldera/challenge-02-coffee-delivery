import { Item } from "../../types/Cart";
import { ActionTypes } from "../enum/actions";
import { toast } from "react-toastify";

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

export const addItemAction = (item: Item) => {
  toast.success("Coffee Adicionado ao Carrinho!", {
    position: toast.POSITION.TOP_CENTER
  })
  return {
    type: ActionTypes.ADD_ITEM,
    payload: {
      item,
    },
  } satisfies Actions
}

export const removeItemAction = (itemId: Item['id']) => {
  toast.success("Coffee Removido!", {
    position: toast.POSITION.TOP_CENTER
  })
  return {
    type: ActionTypes.REMOVE_ITEM,
    payload: {
      itemId,
    },
  } satisfies Actions
}

export function incrementQuantityAction(itemId: Item['id']) {
  toast.success("Quantidade adicionada!", {
    position: toast.POSITION.TOP_CENTER
  })
  return {
    type: ActionTypes.INCREMENT_ITEM_QUANTITY,
    payload: {
      itemId,
    },
  } satisfies Actions
}

export function decrementQuantityAction(itemId: Item['id']) {
  toast.success("Quantidade reduzida!", {
    position: toast.POSITION.TOP_CENTER
  })
  return {
    type: ActionTypes.DECREMENT_ITEM_QUANTITY,
    payload: {
      itemId,
    },
  } satisfies Actions
}