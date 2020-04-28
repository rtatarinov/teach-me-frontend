import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import { opacify } from 'polished';
import styled from 'styled-components';
import { addHoverOpacity } from '@styles/placeholders';
import { theme } from '@styles/theme';

const styles = `
  padding: 10px;
  margin-right: 40px;
  font-size: ${theme.fonts.size.s};
  color: ${opacify(-0.4, theme.colors.black)};
  text-decoration: none;
  ${addHoverOpacity};
`;

const StyledLink = styled(Link)`
  ${styles};
`;

const StyledHrefLink = styled.a`
  ${styles};
`;

const NavigationItemComponent = ({ title, to, href }) =>
  href ? (
    <StyledHrefLink target="_blank" href={href}>
      {title}
    </StyledHrefLink>
  ) : (
    <StyledLink to={to}>{title}</StyledLink>
  );

export const NavigationItem = memo(NavigationItemComponent);
