import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { BUTTON_APPEARANCE } from '@components/UI/Button/constants';
import { resetButtonStyle } from '@styles/placeholders';
import { opacify } from 'polished';
import { styles, getCommonStyles } from './styles';

const Wrapper = styled.button`
  ${resetButtonStyle};
  ${({ appearance }) => styles[appearance]};
  color: ${({ theme, color }) => theme.colors[color]};
  background-color: ${({ theme, bgColor }) => theme.colors[bgColor]};
  ${({ withoutOutline, bgColor }) => getCommonStyles(withoutOutline, bgColor)};

  &[disabled] {
    background-color: ${({ theme, bgColor }) =>
      opacify(-0.6, theme.colors[bgColor])};
    cursor: default;
  }
`;

const StyledLink = styled(Link)`
  ${({ appearance }) => styles[appearance]};
  text-decoration: none;
  background-color: ${({ theme, bgColor }) => theme.colors[bgColor]};
  color: ${({ theme, color }) => theme.colors[color]};
  ${({ withoutOutline, bgColor }) => getCommonStyles(withoutOutline, bgColor)};
`;

const ButtonChildren = styled.span`
  display: block;
  min-width: 138px;
  font-size: ${({ theme }) => theme.fonts.size.m};
  font-weight: ${({ theme }) => theme.fonts.weight.bigMedium};
  color: inherit;
`;

const LinkComponent = ({
  className,
  to,
  withoutOutline,
  children,
  appearance,
  bgColor,
  color,
}) => (
  <StyledLink
    className={className}
    to={to}
    withoutOutline={withoutOutline}
    appearance={appearance}
    bgColor={bgColor}
    color={color}
  >
    {children}
  </StyledLink>
);

const ButtonComponent = ({
  type = 'button',
  children,
  withoutOutline,
  to,
  className,
  appearance = BUTTON_APPEARANCE.BIG,
  bgColor = 'purple',
  color = 'white',
  disabled,
}) => (
  <>
    {to ? (
      <LinkComponent
        to={to}
        className={className}
        withoutOutline={withoutOutline}
        appearance={appearance}
        bgColor={bgColor}
        color={color}
      >
        <ButtonChildren>{children}</ButtonChildren>
      </LinkComponent>
    ) : (
      <Wrapper
        type={type}
        withoutOutline={withoutOutline}
        className={className}
        appearance={appearance}
        bgColor={bgColor}
        color={color}
        disabled={disabled}
      >
        <ButtonChildren>{children}</ButtonChildren>
      </Wrapper>
    )}
  </>
);

export const Button = memo(ButtonComponent);
