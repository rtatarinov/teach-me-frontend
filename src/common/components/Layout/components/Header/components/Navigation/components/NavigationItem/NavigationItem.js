import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { opacify } from 'polished';
import styled from 'styled-components';
import { addHoverOpacity } from '@styles/placeholders';

const StyledLink = styled(Link)`
  padding: 10px;
  font-size: ${({ theme }) => theme.fonts.size.s};
  color: ${({ theme }) => opacify(-0.4, theme.colors.black)};
  text-decoration: none;
  ${addHoverOpacity};
`;

const NavigationItemComponent = ({ title, to }) => (
  <StyledLink to={to}>{title}</StyledLink>
);

export const NavigationItem = memo(NavigationItemComponent);
