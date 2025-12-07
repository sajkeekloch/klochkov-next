import 'styled-components'
import type { ColorScheme, Media } from '@/theme'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      dark: ColorScheme
      light: ColorScheme
    }
    typography: {
      fonts: {
        primary: string
        code: string
      }
      fontSizes: {
        xs: string
        sm: string
        base: string
        md: string
        lg: string
        xl: string
        '2xl': string
        '3xl': string
        '4xl': string
        '5xl': string
      }
      fontWeights: {
        normal: number
        medium: number
        semibold: number
        bold: number
      }
      lineHeights: {
        tight: number
        normal: number
        relaxed: number
      }
    }
    media: Media
  }
}
