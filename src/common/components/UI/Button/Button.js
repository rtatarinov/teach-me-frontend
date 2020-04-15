import React, { memo } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { opacify } from 'polished';
import { BUTTON_APPEARANCE, ICON_POSITION } from '@styles/constants';
import { resetButtonStyle } from '@styles/placeholders';
import { Icon } from '@components/UI/Icon';
import { styles, getCommonStyles } from './styles';

const Wrapper = styled.button`
  ${resetButtonStyle};
  color: ${({ theme, color }) => theme.colors[color]};
  background-color: ${({ theme, bgColor }) => theme.colors[bgColor]};
  ${({ withoutOutline, bgColor }) => getCommonStyles(withoutOutline, bgColor)};

  &[disabled] {
    background-color: ${({ theme, bgColor }) =>
      opacify(-0.6, theme.colors[bgColor])};
    cursor: default;
  }

  ${({ appearance }) => styles[appearance]};
`;

const StyledLink = styled.div`
  background-color: ${({ theme, bgColor }) => theme.colors[bgColor]};
  color: ${({ theme, color }) => theme.colors[color]};
  ${({ withoutOutline, bgColor }) => getCommonStyles(withoutOutline, bgColor)};
  ${({ appearance }) => styles[appearance]};

  > a {
    display: inline-flex;
    text-decoration: none;
    color: inherit;
  }
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
  iconPosition,
  onClick,
}) => (
  <StyledLink
    className={className}
    withoutOutline={withoutOutline}
    appearance={appearance}
    bgColor={bgColor}
    color={color}
    icon={icon}
    onClick={onClick}
  >
    <Link to={to}>
      {icon && iconPosition === ICON_POSITION.PREFIX && (
        <ButtonIcon name={icon} width={iconWidth} height={iconHeight} />
      )}
      {children}
      {icon && iconPosition === ICON_POSITION.POSTFIX && (
        <ButtonIcon name={icon} width={iconWidth} height={iconHeight} />
      )}
    </Link>
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
  iconPosition = ICON_POSITION.POSTFIX,
  onClick = Function.prototype,
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
        icon={icon}
        iconWidth={iconWidth}
        iconHeight={iconHeight}
        iconPosition={iconPosition}
        onClick={onClick}
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
        onClick={onClick}
      >
        <ButtonChildren>
          {icon && iconPosition === ICON_POSITION.PREFIX && (
            <ButtonIcon name={icon} width={iconWidth} height={iconHeight} />
          )}
          {children}
          {icon && iconPosition === ICON_POSITION.POSTFIX && (
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
