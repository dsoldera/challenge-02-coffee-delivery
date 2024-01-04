import { createBrowserRouter } from 'react-router-dom'
import { HomePage } from '@/pages/Home'
import { CartPage } from '@/pages/Cart'
import { ThankYouPage } from '@/pages/ThankYou'
import App from '@/App'
import { ErrorPage } from '@/pages/Error'
import { useCart } from '@/lib/hooks/useCart'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '/cart',
        element: <CartPage />,
      },
      {
        path: '/order/:orderId/',
        element: <ThankYouPage />,
        loader: useCart,
      },
    ],
  },
])
