import { Outlet } from 'react-router-dom';
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './queryClient';
import { CartContextProvider } from './lib/contexts/CartProvider';
import "react-toastify/dist/ReactToastify.css";
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './defaultTheme';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
    <QueryClientProvider client={queryClient}>
      <CartContextProvider>
        <Outlet />
      </CartContextProvider>
    </QueryClientProvider>
    </ThemeProvider>
  )
}

export default App;
