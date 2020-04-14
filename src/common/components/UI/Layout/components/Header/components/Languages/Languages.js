import React, { useState, useRef } from 'react';
import { useClickAway } from 'react-use';
import styled from 'styled-components';
import { Select } from '@components/UI/Select';
import { opacify } from 'polished';
import { resetButtonStyle, addHoverOpacity } from '@styles/placeholders';
import { languages } from './constants';

const Wrapper = styled.div`
  position: relative;
  z-index: ${({ theme }) => theme.zIndex.languagesList};
  margin-left: auto;
`;

const LanguagesWrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: ${({ theme }) => theme.fonts.size.s};
`;

const LanguagesTitle = styled.span`
  padding: 0 8px;
  color: ${({ theme }) => opacify(-0.4, theme.colors.black)};
`;

const LanguagesValue = styled.button`
  ${resetButtonStyle};
  position: relative;
  font-weight: ${({ theme }) => theme.fonts.weight.bigMedium};

  &::after {
    display: block;
    position: absolute;
    top: ${({ isOpened }) => (isOpened ? '8px' : '6px')};
    right: -12px;
    width: 5px;
    height: 5px;
    content: '';
    border-bottom: 1px solid ${({ theme }) => theme.colors.black};
    border-right: 1px solid ${({ theme }) => theme.colors.black};
    transform: ${({ isOpened }) =>
      isOpened ? `rotate(-135deg)` : `rotate(45deg)`};
  }

  ${addHoverOpacity};
`;

export const Languages = () => {
  const [selectedOption, setSelectedOption] = useState(languages[0]);
  const [isOpenedSelect, setIsOpenedSelect] = useState(false);
  const languagesRef = useRef(null);

  const hideSelect = () => {
    setIsOpenedSelect(false);
  };

  const toggleSelect = () => {
    setIsOpenedSelect(!isOpenedSelect);
  };

  const handleLanguageChange = (value) => {
    setSelectedOption(value);
    hideSelect();
  };

  useClickAway(languagesRef, () => {
    if (isOpenedSelect) {
      hideSelect();
    }
  });

  return (
    <Wrapper ref={languagesRef}>
      <LanguagesWrapper>
        <LanguagesTitle>My language is</LanguagesTitle>
        <LanguagesValue
          type="button"
          isOpened={isOpenedSelect}
          onClick={toggleSelect}
        >
          {selectedOption.label}
        </LanguagesValue>
      </LanguagesWrapper>
      {isOpenedSelect && (
        <Select
          options={languages}
          defaultValue={selectedOption}
          menuIsOpen
          placeholder="Choose language"
          onChange={handleLanguageChange}
        />
      )}
    </Wrapper>
  );
};
