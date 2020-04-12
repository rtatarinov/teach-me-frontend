import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { opacify } from 'polished';
import { BUTTON_APPEARANCE } from '@styles/constants';
import { resetButtonStyle } from '@styles/placeholders';
import { Icon } from '@components/UI/Icon';
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
  font-size: ${({ theme }) => theme.fonts.size.m};
  font-weight: ${({ theme }) => theme.fonts.weight.bigMedium};
  color: inherit;
`;

const ButtonIcon = styled(Icon)`
  margin-left: 11px;
`;

const LinkComponent = ({
  className,
  to,
  withoutOutline,
  children,
  appearance,
  bgColor,
  color,
  icon,
  iconWidth,
  iconHeight,
}) => (
  <StyledLink
    className={className}
    to={to}
    withoutOutline={withoutOutline}
    appearance={appearance}
    bgColor={bgColor}
    color={color}
    icon={icon}
  >
    {children}
    {icon && <ButtonIcon name={icon} width={iconWidth} height={iconHeight} />}
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
  icon,
  iconWidth,
  iconHeight,
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
        <ButtonChildren>
          {children}{' '}
          {icon && (
            <ButtonIcon name={icon} width={iconWidth} height={iconHeight} />
          )}
        </ButtonChildren>
      </Wrapper>
    )}
  </>
);

const Button = memo(ButtonComponent);

Button.Children = ButtonChildren;
Button.Icon = ButtonIcon;

export { Button };
