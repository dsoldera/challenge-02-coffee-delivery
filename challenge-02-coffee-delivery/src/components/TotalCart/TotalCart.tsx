import { PiTrash } from 'react-icons/pi';
import { Quantity } from '../Card/components/Quantity';
import { CartTotal, CoffeeItem, CoffeeInfo, CartTotalInfo } from './styles';
import { Fragment, useContext, useEffect, useState } from 'react';
import { CartContext } from '../../lib/contexts/CartProvider';
import { Coffee } from '../../types/Card';
import { v4 as uuidv4 } from 'uuid';

const shippingPrice = 3.5;

export const TotalCart = () => {
  const [coffees, setCoffees] = useState<Coffee[]>([]);
  const { cart, removeItemCart, incrementQuantity, decrementQuantity } = useContext(CartContext);

  useEffect(() => {
    fetch('./api/data.json')
      .then(response => response.json())
      .then((json) => setCoffees(json.coffees) );
  }, []);

  const handleItemRemove = (itemId: string) => {
    removeItemCart(itemId)
  }

  const handleAddCoffee = (itemId: string) => {
    incrementQuantity(itemId)
   };

  const handleRemoveCoffee = (itemId: string) => {
    decrementQuantity(itemId)
  };

  const coffeesInCart = cart.map((item) => {
    const coffeeInfo = coffees.find((coffee) => coffee.id === item.id);

    return {
      ...coffeeInfo,
      quantity: item.quantity,
    }
  })

  const totalItemsPrice = coffeesInCart.reduce((previousValue, currentItem) => {
    return (previousValue += currentItem.price * currentItem.quantity)
  }, 0)
 
  return (
    <>
      <h2>Cafés selecionados</h2>
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
                      incrementQuantity={() => handleAddCoffee(coffee.id!)}
                      decrementQuantity={() => handleRemoveCoffee(coffee.id!)}
                    />

                    <button onClick={() => handleItemRemove(coffee.id!)}>
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
    </>
  )
}