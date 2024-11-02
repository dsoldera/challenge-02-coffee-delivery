import { z } from 'zod'

export interface Item {
  id: string
  quantity: number
}

const mandatory: string = 'Campo obrigatório'

export const addressPaymentNewOrder = z.object({
  cep: z.string({ invalid_type_error: 'CEP Incorreto' }).min(8, mandatory),
  street: z.string().min(1, mandatory),
  number: z.string().min(1, mandatory),
  fullAddress: z.string(),
  neighborhood: z.string().min(1, mandatory),
  city: z.string().min(1, mandatory),
  state: z.string().min(1, mandatory),
  paymentMethod: z
    .enum(['credit', 'debit', 'cash'], {
      invalid_type_error: mandatory,
    })
    .optional(),
})

export type OrderInfo = z.infer<typeof addressPaymentNewOrder>

export interface Order extends OrderInfo {
  id: number
  items: Item[]
}

export interface CartState {
  cart: Item[]
  orders: Order[]
}
