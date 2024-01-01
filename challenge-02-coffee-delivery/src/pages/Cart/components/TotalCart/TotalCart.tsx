import { PiTrash } from 'react-icons/pi';
import { Quantity } from '../../../../components/Card/components/Quantity';
import { CartTotal, CoffeeItem, CoffeeInfo, Container } from './styles';
import { Fragment, useContext, useEffect, useState } from 'react';
import { CartContext } from '../../../../lib/contexts/CartProvider';
import { Coffee } from '../../../../types/Card';
import { v4 as uuidv4 } from 'uuid';

export const TotalCart = () => {
  const [coffees, setCoffees] = useState<Coffee[]>([]);
  const { cart, removeItemCart } = useContext(CartContext);

  useEffect(() => {
    fetch('./api/data.json')
      .then(response => response.json())
      .then((json) => setCoffees(json.coffees) );
  }, []);

  const handleItemRemove = (id: string) => {
    console.log('id', id);
  }

  const handleAddCoffee = (id: string) => { };

  const handleRemoveCoffee = (id: string) => {};

  const coffeesInCart = cart.map((item) => {
    const coffeeInfo = coffees.find((coffee) => coffee.id === item.id);

    return {
      ...coffeeInfo,
      quantity: item.quantity,
    }
  })
 
  return (
    <Container>
      <h2>Total Cart</h2>
        <CartTotal key={uuidv4()}>
          {coffeesInCart && coffeesInCart.map((coffee) => (
            <Fragment key={coffee.id}>
              <CoffeeItem>
                <div>
                  <img src={coffee.image} alt={coffee.title} />

                  <div>
                    <span>{coffee.title}</span>

                    <CoffeeInfo>
                      <Quantity
                        quantity={coffee.quantity}
                        incrementQuantity={() => handleAddCoffee(coffee.id)}
                        decrementQuantity={() => handleRemoveCoffee(coffee.id)}
                      />

                      <button onClick={() => handleItemRemove(coffee.id)}>
                        <PiTrash />
                        <span>Remover</span>
                      </button>
                    </CoffeeInfo>
                  </div>
                </div>

                <aside>R$ {coffee.price?.toFixed(2)}</aside>
              </CoffeeItem>

              <span />
            </Fragment>
          ))}
        </CartTotal>
    </Container>
  )
}