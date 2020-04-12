import { CONTAINER_TYPES } from './constants';

export const theme = {
  colors: {
    white: '#fff',
    black: '#000',
    purple: '#655eb0',
    orange: '#f89a42',
    green: '#34c759',
  },
  fonts: {
    size: {
      default: '16px',
      s: '15px',
      m: '20px',
      l: '22px',
      xl: '41px',
    },
    weight: {
      thin: 100,
      regular: 400,
      medium: 500,
      bold: 700,
      semiBold: 900,
    },
    lineHeight: {
      m: 1.5,
    },
    family: {
      default: `'Montserrat', sans-serif`,
    },
  },
  transition: {
    default: '0.25s',
    fast: '0.15s',
  },
  borderRadius: {
    default: '16px',
  },
  zIndex: {
    default: 1,
  },
  containerWidth: {
    [CONTAINER_TYPES.DEFAULT]: 1240,
  },
};
