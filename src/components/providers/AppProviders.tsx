import { ReactNode } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ChakraProvider } from '@chakra-ui/react'

import { FetchProvider } from 'components/providers/FetchProvider'
import { AuthProvider } from 'components/providers/AuthProvider'
import { theme } from 'themes'

interface AppProvidersProps {
  children: ReactNode
}

const queryClient = new QueryClient()

const AppProviders = (
  { children }: AppProvidersProps
): JSX.Element => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <FetchProvider>
        <ChakraProvider theme={theme}>
          {children}
        </ChakraProvider>
      </FetchProvider>
    </AuthProvider>
  </QueryClientProvider>
)

export { AppProviders }
