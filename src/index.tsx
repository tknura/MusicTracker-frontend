import React from 'react'
import ReactDOM from 'react-dom'
import { ColorModeScript } from '@chakra-ui/react'
import { theme } from 'themes'

import App from 'App'
import 'i18n'
import { AppProviders } from 'components/providers/AppProviders'
import './index.css'

ReactDOM.render(
  <React.StrictMode>
    <AppProviders>
      <App />
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
    </AppProviders>
  </React.StrictMode>,
  document.getElementById('root')
)
