import { z } from "zod"

export interface Item {
  id: string
  quantity: number
}

export interface Order extends OrderInfo {
  id: number
  items: Item[]
}

export type OrderInfo = z.infer<typeof newOrder>

const mandatory: string = 'Campo obrigatório';
const newOrder = z.object({
  cep: z.number({ invalid_type_error: 'CEP Incorreto' }),
  street: z.string().min(1, mandatory),
  number: z.string().min(1, mandatory),
  fullAddress: z.string(),
  neighborhood: z.string().min(1, mandatory),
  city: z.string().min(1, mandatory),
  state: z.string().min(1, mandatory),
  paymentMethod: z.enum(['credit', 'debit', 'cash'], {
    invalid_type_error: mandatory,
  }),
})

export interface CartState {
  cart: Item[]
  orders: Order[]
}

export interface PaymentMethod { 
  type: 'credit' | 'debit' | 'cash';
}