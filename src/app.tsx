import '@/global.css'

import { QueryClientProvider } from '@tanstack/react-query'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { RouterProvider } from 'react-router-dom'
import { Toaster } from 'sonner'

import { ThemeProvider } from '@/components/theme/theme-provider'
import { router } from '@/routes'

import { queryClient } from './lib/react-query'

export function App() {
  return (
    <ThemeProvider storageKey="delivery-shop-theme">
      <HelmetProvider>
        <Helmet titleTemplate="%s | delivery.shop" />
        <Toaster richColors />
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </HelmetProvider>
    </ThemeProvider>
  )
}
