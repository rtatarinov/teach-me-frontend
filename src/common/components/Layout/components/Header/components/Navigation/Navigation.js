import React, { memo } from 'react';
import { ROUTES } from '@common/constants';
import { NavigationItem } from './components/NavigationItem';

const links = [
  {
    title: 'About us',
    to: ROUTES.ABOUT,
  },
  {
    title: 'Privacy Policy',
    href: 'https://teach-me.flycricket.io/privacy.html',
  },
];

const NavigationComponent = () => (
  <nav>
    {links.map(({ to, title, href }) => (
      <NavigationItem key={title} to={to} title={title} href={href} />
    ))}
  </nav>
);

export const Navigation = memo(NavigationComponent);
