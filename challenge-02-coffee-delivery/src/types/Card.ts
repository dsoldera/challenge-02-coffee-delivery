export interface CardProps {
  coffee: {
    id: string
    title: string
    description: string
    tags: string[]
    price: number
    image: string
  }
}
export interface Coffee {
  id: string;
  title: string;
  description: string;
  tags: string[];
  price: number;
  image: string;
}

export interface QuantityCardProps {
  quantity: number
  incrementQuantity: () => void
  decrementQuantity: () => void
}