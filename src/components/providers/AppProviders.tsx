import { ReactNode } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ChakraProvider } from '@chakra-ui/react'

import { FetchProvider } from 'components/providers/FetchProvider'
import { AuthProvider } from 'components/providers/AuthProvider'
import { SpotifyApiProvider } from 'components/providers/SpotifyApiProvider'
import { theme } from 'themes'
import { GeniusApiProvider } from './GeniusApiProvider'

interface AppProvidersProps {
  children: ReactNode
}

const queryClient = new QueryClient()

const AppProviders = (
  { children }: AppProvidersProps
): JSX.Element => {
  if (!process.env.REACT_APP_API_URL) {
    // eslint-disable-next-line no-console
    console.warn('Specify api url id in env file to app work properly!')
  }
  if (!process.env.REACT_APP_SPOTIFY_CLIENT_ID) {
    // eslint-disable-next-line no-console
    console.warn('Specify spotify api client id in env file to app work properly!')
  }

  return (
    <QueryClientProvider client={queryClient}>
      <FetchProvider>
        <AuthProvider>
          <SpotifyApiProvider>
            <GeniusApiProvider>
              <ChakraProvider theme={theme}>
                {children}
              </ChakraProvider>
            </GeniusApiProvider>
          </SpotifyApiProvider>
        </AuthProvider>
      </FetchProvider>
    </QueryClientProvider>
  )
}

export { AppProviders }
