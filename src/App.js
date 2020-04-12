import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from '@styles/theme';
import { GlobalStyle } from '@styles/GlobalStyles';
import { Root } from '@src/Root';

export const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Root />
  </ThemeProvider>
);
