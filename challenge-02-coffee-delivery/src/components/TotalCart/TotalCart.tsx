import { PiTrash } from 'react-icons/pi'
import { Quantity } from '../Card/components/Quantity'
import { useEffect, useState } from 'react'
import { Coffee } from '@/types/Card'
import { useCart } from '@/lib/hooks/useCart'
import {
  CartTotal,
  CoffeeItem,
  CoffeeInfo,
  CartTotalInfo,
  ContainerTotal,
  Price,
} from './styles'

const shippingPrice = 3.5

export const TotalCart = () => {
  const [coffees, setCoffees] = useState<Coffee[]>([])
  const { cart, removeItemCart, incrementQuantity, decrementQuantity } =
    useCart()

  useEffect(() => {
    fetch('./api/data.json')
      .then((response) => response.json())
      .then((json) => setCoffees(json.coffees))
  }, [])

  const handleItemRemove = (itemId: string) => {
    removeItemCart(itemId)
  }

  const handleAddCoffee = (itemId: string) => {
    incrementQuantity(itemId)
  }

  const handleRemoveCoffee = (itemId: string) => {
    decrementQuantity(itemId)
  }

  const coffeesInCart = cart.map((item) => {
    const coffeeInfo = coffees.find((coffee) => coffee.id === item.id)

    return {
      ...coffeeInfo,
      quantity: item.quantity,
    }
  })

  const totalItemsPrice = coffeesInCart.reduce((previousValue, currentItem) => {
    return (previousValue += (currentItem.price ?? 0) * currentItem.quantity)
  }, 0)

  return (
    <ContainerTotal>
      <CartTotal>
        {coffeesInCart.map((coffee) => (
          <div key={coffee.id}>
            <CoffeeItem key={coffee.id}>
              <img src={coffee.image} alt={coffee.title} />
              <CoffeeInfo>
                <div>
                  <p>{coffee.title}</p>
                </div>
                <div>
                  <Quantity
                    quantity={coffee.quantity}
                    incrementQuantity={() => handleAddCoffee(coffee.id!)}
                    decrementQuantity={() => handleRemoveCoffee(coffee.id!)}
                  />
                  <button
                    type="button"
                    style={{ marginLeft: '10px' }}
                    onClick={() => handleItemRemove(coffee.id!)}
                  >
                    <PiTrash />
                    <span>REMOVER</span>
                  </button>
                </div>
              </CoffeeInfo>
              <Price>R$ {coffee.price?.toFixed(2)}</Price>
            </CoffeeItem>
          </div>
        ))}
        <CartTotalInfo>
          <div>
            <span>Total de itens</span>
            <span>
              {new Intl.NumberFormat('pt-br', {
                currency: 'BRL',
                style: 'currency',
              }).format(totalItemsPrice)}
            </span>
          </div>

          <div>
            <span>Entrega</span>
            <span>
              {new Intl.NumberFormat('pt-br', {
                currency: 'BRL',
                style: 'currency',
              }).format(shippingPrice)}
            </span>
          </div>

          <div>
            <span>Total</span>
            <span>
              {new Intl.NumberFormat('pt-br', {
                currency: 'BRL',
                style: 'currency',
              }).format(totalItemsPrice + shippingPrice)}
            </span>
          </div>
        </CartTotalInfo>
      </CartTotal>
    </ContainerTotal>
  )
}
