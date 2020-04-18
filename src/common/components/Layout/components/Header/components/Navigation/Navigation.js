import React, { memo } from 'react';
import styled from 'styled-components';
import { ROUTES } from '@common/constants';
import { NavigationItem } from './components/NavigationItem';

const Wrapper = styled.nav`
  margin-right: 60px;
  margin-left: auto;
`;

const links = [
  {
    title: 'About us',
    to: ROUTES.ABOUT_US,
  },
];

const NavigationComponent = () => (
  <Wrapper>
    {links.map(({ to, title }) => (
      <NavigationItem key={title} to={to} title={title} />
    ))}
  </Wrapper>
);

export const Navigation = memo(NavigationComponent);
