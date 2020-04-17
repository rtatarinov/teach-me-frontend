import React, { memo } from 'react';
import styled from 'styled-components';
import { opacify } from 'polished';
import { addHoverOpacity } from '@styles/placeholders';

const Label = styled.label`
  position: relative;
  padding: 13px 20px;
  border: 1px solid
    ${({ theme, checked }) =>
      checked ? theme.colors.orange : opacify(-0.94, theme.colors.black)};
  border-radius: ${({ theme }) => theme.borderRadius.xl};
  transition: ease ${({ theme }) => theme.transition.fast} all;
  ${({ theme, checked }) =>
    checked &&
    `
    color: ${theme.colors.white};
    background-color: ${theme.colors.orange};
  `}
  ${({ disabled }) =>
    disabled
      ? `
    opacity: 0.3;
    cursor: default;
  `
      : addHoverOpacity};

  ${({ isActive, theme, checked }) =>
    isActive &&
    `
    &::after {
      position: absolute;
      top: 10px;
      right: 10px;
      width: 6px;
      height: 6px;
      content: '';
      background-color: ${checked ? theme.colors.white : theme.colors.orange};
      border-radius: 50%;
    }
  `}
`;

const Input = styled.input`
  position: absolute;
  top: 0;
  left: 0;
  appearance: none;
  width: 100%;
  height: 100%;
  cursor: pointer;

  &:focus {
    outline: transparent;
  }

  &:focus-within {
    box-shadow: 0 0 0 6px ${({ theme }) => opacify(-0.9, theme.colors.orange)};
    border-radius: ${({ theme }) => theme.borderRadius.xl};
  }
`;

const CheckboxComponent = ({
  children,
  disabled,
  checked,
  name,
  isActive,
  onChange = Function.prototype,
  onBlur = Function.prototype,
  className,
}) => (
  <Label
    className={className}
    disabled={disabled}
    checked={checked}
    isActive={isActive}
  >
    <Input
      onChange={onChange}
      onBlur={onBlur}
      type="checkbox"
      disabled={disabled}
      checked={checked}
      name={name}
    />
    {children}
  </Label>
);

export const Checkbox = memo(CheckboxComponent);
