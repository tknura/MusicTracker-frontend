import { ReactNode } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { StylesProvider, ThemeProvider as MuiThemeProvider } from '@material-ui/core'
import { ThemeProvider } from 'styled-components'

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
        <StylesProvider injectFirst>
          <MuiThemeProvider theme={theme}>
            <ThemeProvider theme={theme}>
              {children}
            </ThemeProvider>
          </MuiThemeProvider>
        </StylesProvider>
      </FetchProvider>
    </AuthProvider>
  </QueryClientProvider>
)

export { AppProviders }
