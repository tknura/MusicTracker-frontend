import { createMuiTheme } from '@material-ui/core'

declare module '@material-ui/core/styles/createPalette' {
  interface Palette {
    accents: Palette['primary'];
  }
  interface PaletteOptions {
    accents: PaletteOptions['primary'];
  }
}

export const theme = createMuiTheme(
  {
    palette: {
      type: 'dark',
      accents: {
        main: '#ffffff',
      },
      primary: {
        main: '#D64550',
      },
      secondary: {
        main: '#6FEDB7'
      },
      background: {
        default: '#1C2826',
        paper: '#1C2826'
      }
    },
  }
)
