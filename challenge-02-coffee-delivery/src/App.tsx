import { Outlet } from 'react-router-dom'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from './queryClient'
import { CartContextProvider } from './contexts/CartProvider'
import 'react-toastify/dist/ReactToastify.css'
import { ThemeProvider } from 'styled-components'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { Header } from '@/components/Header'

import { defaultTheme } from './lib/styles/themes/default'
import { GlobalStylesCoffeeDelivery } from './lib/styles/global'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStylesCoffeeDelivery />
      <QueryClientProvider client={queryClient}>
        <CartContextProvider>
          <Header />
          <HelmetProvider>
            <Helmet titleTemplate="%s | Coffee Delivery" />
            <Outlet />
          </HelmetProvider>
        </CartContextProvider>
      </QueryClientProvider>
    </ThemeProvider>
  )
}

export default App
