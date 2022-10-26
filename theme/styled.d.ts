import 'styled-components';
import { Unit } from '@karibash/pixel-units';

type Spacing = Record<number, Unit<'rem'>>
type TypographyValues = {
  size: Unit<'rem'>
  height: number
}

declare module 'styled-components' {
  export interface DefaultTheme {
     colors: {
      body: string,
      heading: string,
      accent: string,
      button: string,
      lightGrey: string,
      violet: string
     }
     borderRadius: {
       1: Unit<'px'>
     }
     spacing: Spacing
     padding: Spacing
     margin: Spacing
  }
}
