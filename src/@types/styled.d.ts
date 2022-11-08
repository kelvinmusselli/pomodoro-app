import { defaultTheme } from '../styles/themes/default'

type ThemeType = typeof defaultTheme

declare module 'styled-components' {
  // de styled components na props
  // Default theme use a Theme Type
  export interface DefaultTheme extends ThemeType {}
}
