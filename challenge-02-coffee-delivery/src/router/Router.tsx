import { Route, Routes } from 'react-router-dom';
import { Home } from '../pages/Home';
import { ThankYou } from '../pages/ThankYou';
import { Cart } from '../pages/Cart';

export const Router = () => {
  return (
    <Routes>
       <Route path="/" element={<Home />} />
       <Route path='cart' element={<Cart />} />
       <Route path='thank-you' element={<ThankYou  />} />
    </Routes>
  )
}