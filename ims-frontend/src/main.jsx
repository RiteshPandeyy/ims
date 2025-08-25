import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { store } from './store/index.js'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { BrowserRouter } from 'react-router-dom'
import AppRoutes from './routes/AppRoutes.jsx'

const queryClient = new QueryClient();

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Provider store={store}>
     <QueryClientProvider client={queryClient}>
      <BrowserRouter>
      <AppRoutes/>
       <ReactQueryDevtools initialIsOpen={false} />
      </BrowserRouter>
     </QueryClientProvider>
   </Provider>
  </StrictMode>,
)
