import { Link } from 'react-router-dom'
import { Container, LeftSide } from './styles'
import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import { useContext } from 'react'
import { CartContext } from '@/contexts/CartProvider'

export const Header = () => {
  const { cart } = useContext(CartContext)
  return (
    <Container>
      <Link to="/">
        <img src="/logo.svg" alt="Coffee Delivery" />
      </Link>

      <LeftSide>
        <div>
          <MapPin size={22} weight="fill" />
          <span>Campinas, SP</span>
        </div>

        <Link to="/cart">
          <ShoppingCart size={22} weight="fill" />
          {cart.length > 0 ? <span>{cart.length}</span> : null}
        </Link>
      </LeftSide>
    </Container>
  )
}
