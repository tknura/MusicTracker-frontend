import { ReactNode } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { StylesProvider, ThemeProvider as MuiThemeProvider } from '@material-ui/core'
import { ThemeProvider } from 'styled-components'

import { theme } from 'themes'

interface AppProvidersProps {
  children: ReactNode
}

const queryClient = new QueryClient()

const AppProviders = (
  { children }: AppProvidersProps
): JSX.Element => (
  <QueryClientProvider client={queryClient}>
    <StylesProvider injectFirst>
      <MuiThemeProvider theme={theme}>
        <ThemeProvider theme={theme}>
          {children}
        </ThemeProvider>
      </MuiThemeProvider>
    </StylesProvider>
  </QueryClientProvider>
)

export { AppProviders }
