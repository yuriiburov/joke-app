import ReactDOM from 'react-dom/client';
import HomePage from './pages/Home';
import './styles/globals.scss';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <QueryClientProvider client={queryClient}>
    <HomePage />
  </QueryClientProvider>
);
