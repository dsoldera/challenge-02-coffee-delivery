import { Item } from "../../types/Cart"
import { ActionTypes } from "../enum/actions"

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
  return {
    type: ActionTypes.ADD_ITEM,
    payload: {
      item,
    },
  } satisfies Actions
}

export const removeItemAction = (itemId: Item['id']) => {
  return {
    type: ActionTypes.REMOVE_ITEM,
    payload: {
      itemId,
    },
  } satisfies Actions
}