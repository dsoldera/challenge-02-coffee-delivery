import { BrowserRouter } from 'react-router-dom';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './queryClient';
import { Router } from './router';
import { CartContextProvider } from './lib/contexts/CartProvider';
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <CartContextProvider>
          <Router />
        </CartContextProvider>
      </QueryClientProvider>
    </BrowserRouter>
  )
}

export default App;
