import { BrowserRouter } from 'react-router-dom';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './queryClient';
import { Router } from './router';

export function App() {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Router />
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </BrowserRouter>
  )
}

