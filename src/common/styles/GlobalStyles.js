import { createGlobalStyle } from 'styled-components';
import { normalize } from 'polished';
import { media } from '@styles/utils';

export const GlobalStyle = createGlobalStyle`
  ${normalize};

  *,
  *::after,
  *::before {
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    width: 100%;
    min-width: 320px;
    font-family: ${({ theme }) => theme.fonts.family.default};
    font-size: ${({ theme }) => theme.fonts.size.default};
    color: ${({ theme }) => theme.colors.black};
    background-color: ${({ theme }) => theme.colors.white};
  }

  #app {
    height: 100vh;
    ${media.MOBILE`
      height: calc(100vh - 60px);
    `}
  }

  img {
    max-width: 100%;
  }

  figure {
    margin: 0;
  }
`;
