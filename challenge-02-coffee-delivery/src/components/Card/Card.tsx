import { useContext, useState } from 'react';
import { CardProps } from '@/types/Card';
import { CoffeeImg, Container, Description, OrderSection, Tags, Title, Price, Order } from './styles';
import { PiShoppingCart, PiCheckFat } from 'react-icons/pi';
import { Quantity } from './components/Quantity';
import { CartContext } from '@/lib/contexts/CartProvider';

export const Card = ({ coffee }: CardProps) => {
  const [isItemAdded, setIsItemAdded] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const { addItemtoCart } = useContext(CartContext);

  const handleAddItem = () => {
    console.log('add Item');
    console.log('coffee', coffee);
    console.log('quantity', quantity);
    addItemtoCart({id: coffee.id, quantity });
    setIsItemAdded(true);
    setQuantity(1);
  }

  const handleIncrementQtd = () => {
    setQuantity((state) => state + 1);
  }

  const handleDecreseQtd = () => {
    if (quantity > 1) {
      setQuantity((state) => state - 1);
    }
  }

  return (
    <Container>
      <CoffeeImg src={coffee.image} alt={coffee.title} />
      <Title>{coffee.title}</Title>
      <Tags>
        {coffee.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </Tags>
      <Description>{coffee.description}</Description>
      <OrderSection>
        <Price>
          <span>R$</span><span>{coffee.price.toFixed(2)}</span>
        </Price>
        <Order $itemAdded={isItemAdded}>
          <Quantity
            quantity={quantity}
            incrementQuantity={handleIncrementQtd}
            decrementQuantity={handleDecreseQtd}
          />

          <button disabled={isItemAdded} onClick={handleAddItem}>
            {isItemAdded ? (
              <PiCheckFat
                weight="fill"
                size={15}
              />
            ) : (
              <PiShoppingCart size={15} />
            )}
          </button>
        </Order>
      </OrderSection>
    </Container>
  )
}