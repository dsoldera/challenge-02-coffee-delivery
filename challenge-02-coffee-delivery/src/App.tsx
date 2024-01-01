import { BrowserRouter } from 'react-router-dom';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './queryClient';
import { Router } from './router';
import { CartContextProvider } from './lib/contexts/CartProvider';
import "react-toastify/dist/ReactToastify.css";

export function App() {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <CartContextProvider>
          <Router />
          <ReactQueryDevtools initialIsOpen={false} />
        </CartContextProvider>
      </QueryClientProvider>
    </BrowserRouter>
  )
}

