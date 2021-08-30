import { extendTheme, ThemeConfig } from '@chakra-ui/react'

const config : ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

export const theme = extendTheme({
  colors: {
    primary: {
      100: '#E58A92',
      200: '#E27982',
      300: '#DE6872',
      400: '#DA5863',
      500: '#D64550',
      600: '#D33643',
      700: '#C92C39',
      800: '#B82834',
      900: '#A72530',
    },
    accent: '#ffffff',
    secondary: {
      100: '#B6F6DA',
      200: '#A4F4D1',
      300: '#92F2C8',
      400: '#80EFBF',
      500: '#6FEDB7',
      600: '#5CEBAD',
      700: '#49E9A4',
      800: '#37E69A',
      900: '#25E491',
    },
    background: '#1C2826'
  },
  config,
})
