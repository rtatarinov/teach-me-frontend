import React, { memo } from 'react';
import styled from 'styled-components';
import { Container } from '@components/UI/Container';
import { Header } from './components/Header';

const Main = styled.main`
  min-height: calc(100vh - 190px);
`;

const LayoutComponent = ({ children, className, headerAppearance }) => (
  <Container>
    <Header appearance={headerAppearance} />
    <Main className={className}>{children}</Main>
  </Container>
);

export const Layout = memo(LayoutComponent);
