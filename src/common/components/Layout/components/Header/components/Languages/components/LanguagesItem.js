import React, { memo } from 'react';
import styled from 'styled-components';

const Label = styled.label`
  position: relative;
  display: block;
  padding: 16px 24px;
  font-size: ${({ theme }) => theme.fonts.size.s};
  color: ${({ theme, isSelected }) =>
    isSelected ? theme.colors.purple : theme.colors.black};
  ${({ theme, isSelected }) =>
    isSelected &&
    `
    font-weight: ${theme.fonts.weight.medium};
  `}

  &::after {
    position: absolute;
    top: 50%;
    right: 24px;
    width: 18px;
    height: 18px;
    content: '';
    background-color: ${({ theme, isSelected }) =>
      isSelected ? theme.colors.purple : 'transparent'};
    background-image: ${({ isSelected }) =>
      isSelected ? 'url("/img/check.svg")' : 'none'};
    background-repeat: no-repeat;
    background-position: center center;
    border: ${({ theme, isSelected }) =>
      isSelected
        ? 'transparent'
        : `1px solid ${isSelected ? theme.colors.purple : '#c4c4c4'}`};
    border-radius: ${({ theme }) => theme.borderRadius.xs};
    transform: translateY(-50%);
  }

  &:hover {
    ${({ isSelected }) =>
      !isSelected &&
      `
      cursor: pointer;
      opacity: 0.75;
    `}
  }
`;

const Input = styled.input`
  display: none;
`;

const LanguagesItemComponent = ({ language, isSelected, onChange }) => {
  const { label, value } = language;

  return (
    <Label isSelected={isSelected}>
      {label}
      <Input
        type="checkbox"
        onChange={() => onChange(language)}
        value={value}
      />
    </Label>
  );
};

export const LanguagesItem = memo(LanguagesItemComponent);
