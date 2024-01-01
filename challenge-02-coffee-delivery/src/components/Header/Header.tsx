import { Link } from 'react-router-dom';
import { Container, LeftSide } from './styles';
import { PiShoppingCart, PiMapPinFill } from 'react-icons/pi';
import { useContext } from 'react';
import { CartContext } from '../../lib/contexts/CartProvider';

export const Header = () => {
  const { cart } = useContext(CartContext);
  return (
    <Container>
      <Link to="/">
        <img src="/logo.svg" alt="Coffee Delivery" />
      </Link>

      <LeftSide>
        <div>
          <PiMapPinFill size={22} weight="fill" />
          <span>Campinas, SP</span>
        </div>

         {/* {aria-disabled={cart.length === 0}} */}
        <Link to='/cart'>
          <PiShoppingCart size={22} weight="fill" />
          {cart.length > 0 ? <span>{cart.length}</span> : null}
        </Link>
      </LeftSide>
    </Container>
  )
}