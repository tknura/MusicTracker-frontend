import { ReactNode } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ChakraProvider } from '@chakra-ui/react'

import { FetchProvider } from 'components/providers/FetchProvider'
import { AuthProvider } from 'components/providers/AuthProvider'
import { SpotifyApiProvider } from 'components/providers/SpotifyApiProvider'
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
        <SpotifyApiProvider>
          <ChakraProvider theme={theme}>
            {children}
          </ChakraProvider>
        </SpotifyApiProvider>
      </FetchProvider>
    </AuthProvider>
  </QueryClientProvider>
)

export { AppProviders }
