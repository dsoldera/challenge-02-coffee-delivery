import { useState } from 'react'
import { CardProps } from '@/types/Card'
import { Quantity } from './components/Quantity'
import { useCart } from '@/hooks/useCart'
import {
  CoffeeImg,
  Container,
  CoffeeDescription,
  CoffeeTags,
  CoffeeTitle,
  CoffeeOrderSection,
  CoffeePrice,
  CoffeeOrder,
} from './styles'
import { CheckFat, ShoppingCart } from '@phosphor-icons/react'
import { useTheme } from 'styled-components'
import { useCartZustand } from '@/store/cart/cart'

export const Card = ({ coffee }: CardProps) => {
  const [isItemAdded, setIsItemAdded] = useState(false)
  const [quantity, setQuantity] = useState(1)
  const { addItemZ } = useCartZustand()
  const theme = useTheme()

  const handleAddItem = () => {
    addItemZ({ id: coffee.id, quantity })
    setIsItemAdded(true)
    setQuantity(1)
  }

  const handleIncrementQtd = () => {
    setQuantity((state) => state + 1)
  }

  const handleDecreseQtd = () => {
    if (quantity > 1) {
      setQuantity((state) => state - 1)
    }
  }

  return (
    <Container>
      <CoffeeImg src={coffee.image} alt={coffee.title} />

      <CoffeeTags>
        {coffee.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </CoffeeTags>

      <CoffeeTitle>{coffee.title}</CoffeeTitle>

      <CoffeeDescription>{coffee.description}</CoffeeDescription>

      <CoffeeOrderSection>
        <CoffeePrice>
          <span>R$</span>
          <span>{coffee.price.toFixed(2)}</span>
        </CoffeePrice>
        <CoffeeOrder $itemAdded={isItemAdded}>
          <Quantity
            quantity={quantity}
            incrementQuantity={handleIncrementQtd}
            decrementQuantity={handleDecreseQtd}
          />

          <button disabled={isItemAdded} onClick={handleAddItem}>
            {isItemAdded ? (
              <CheckFat weight="fill" size={22} color={theme.colors.baseCard} />
            ) : (
              <ShoppingCart size={22} color={theme.colors.baseCard} />
            )}
          </button>
        </CoffeeOrder>
      </CoffeeOrderSection>
    </Container>
  )
}
