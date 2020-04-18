import { CONTAINER_TYPES } from './constants';

export const theme = {
  colors: {
    white: '#fff',
    black: '#000',
    purple: '#655eb0',
    orange: '#f89a42',
    green: '#34c759',
    red: '#e14321',
  },
  fonts: {
    size: {
      default: '16px',
      xs: '10px',
      s: '15px',
      m: '20px',
      l: '22px',
      xl: '41px',
      xxl: '80px',
    },
    weight: {
      regular: 400,
      medium: 500,
      bigMedium: 600,
      bold: 700,
      semiBold: 900,
    },
    lineHeight: {
      m: 1.5,
      l: '37px',
      xl: '48px',
    },
    family: {
      default: `'Montserrat', sans-serif`,
    },
  },
  transition: {
    default: '0.3s',
    fast: '0.15s',
    slow: '0.5s',
  },
  borderRadius: {
    default: '16px',
    xs: '4px',
    s: '6px',
    xm: '9px',
    m: '14px',
    l: '25px',
    xl: '45px',
  },
  zIndex: {
    default: 1,
    languagesList: 2,
    rocket: 2,
    astronaut: 3,
    alert: 4,
  },
  containerWidth: {
    [CONTAINER_TYPES.DEFAULT]: `calc(100% - 140px)`,
  },
};
