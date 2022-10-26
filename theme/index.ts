import { Unit } from '@karibash/pixel-units';
import { DefaultTheme } from 'styled-components';

const colors = {
  body: '#838fa6',
  heading: '#ebedf2',
  accent: '#BA99FF',
  button: '#FFF',
  lightGrey: '#1D2433',
  violet : '#BA99FF'
}

const spacing: Record<number, Unit<'rem'>> = {
  1: '0.5rem',
  2: '1rem',
  3: '2rem'
}

const size = {
  mobileS: '320px',
  mobileM: '375px',
  mobileL: '425px',
  tablet: '768px',
  laptop: '1024px',
  laptopL: '1440px',
  desktop: '2560px'
}

export const device = {
  mobileS: `(min-width: ${size.mobileS})`,
  mobileM: `(min-width: ${size.mobileM})`,
  mobileL: `(min-width: ${size.mobileL})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  laptopL: `(min-width: ${size.laptopL})`,
  desktop: `(min-width: ${size.desktop})`,
  desktopL: `(min-width: ${size.desktop})`
};

const theme: DefaultTheme = {
  colors,
  borderRadius: {
    1: '4px'
  },
  spacing,
  padding: {
    ...spacing
  },
  margin: {
    ...spacing
  },
};

export { theme };