import { Link } from 'react-router-dom'
import { Container, LeftSide } from './styles'
import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import { useCartZustand } from '@/store/cart/cart'

export const Header = () => {
  const { cartZ } = useCartZustand()

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
          {cartZ.length > 0 ? <span>{cartZ.length}</span> : null}
        </Link>
      </LeftSide>
    </Container>
  )
}
