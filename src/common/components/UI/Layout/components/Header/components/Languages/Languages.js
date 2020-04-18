import React, { useState, useRef } from 'react';
import { useClickAway, useList, useKeyPressEvent } from 'react-use';
import styled from 'styled-components';
import { opacify } from 'polished';
import { Content } from '@components/UI/Content';
import { Alert } from '@components/UI/Alert';
import { resetButtonStyle, addHoverOpacity } from '@styles/placeholders';
import { LanguagesItem } from './components';
import { languages } from './constants';

const Wrapper = styled.div`
  position: relative;
  z-index: ${({ theme }) => theme.zIndex.languagesList};
  margin-left: auto;
  background-color: ${({ theme }) => theme.colors.white};
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

const LanguagesListWrapper = styled.div`
  position: absolute;
  top: calc(100% + 5px);
  right: -15px;
  width: 342px;
  padding-top: 24px;
  padding-bottom: 8px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.m};
  box-shadow: ${({ theme }) =>
    `0 11px 35px ${opacify(-0.95, theme.colors.black)}`};
`;

const SubTitle = styled(Content.SubTitle)`
  padding: 0 24px;
  margin-bottom: 12px;
`;

const LanguagesValue = styled.button`
  ${resetButtonStyle};
  position: relative;
  font-weight: ${({ theme }) => theme.fonts.weight.bigMedium};

  &::after {
    position: absolute;
    top: ${({ isOpened }) => (isOpened ? '8px' : '6px')};
    right: -12px;
    display: block;
    width: 5px;
    height: 5px;
    content: '';
    border-right: 1px solid ${({ theme }) => theme.colors.black};
    border-bottom: 1px solid ${({ theme }) => theme.colors.black};
    transform: ${({ isOpened }) =>
      isOpened ? `rotate(-135deg)` : `rotate(45deg)`};
  }

  ${addHoverOpacity};
`;

export const Languages = () => {
  const [isShownAlert, setIsShownAlert] = useState(false);
  const [selectedOptions, { push, remove }] = useList([languages[0]]);
  const [isOpenedSelect, setIsOpenedSelect] = useState(false);
  const languagesRef = useRef(null);

  const hideSelect = () => {
    setIsOpenedSelect(false);
  };

  const toggleSelect = () => {
    setIsOpenedSelect(!isOpenedSelect);
  };

  const handleLanguageChange = (language) => {
    const { value } = language;
    const indexOfElement = selectedOptions.findIndex(
      (item) => item.value === value,
    );

    if (selectedOptions.length === 1 && indexOfElement !== -1) {
      setIsShownAlert(true);
      return;
    }

    if (indexOfElement === -1) {
      push(language);
    } else {
      remove(indexOfElement);
    }
  };

  useClickAway(languagesRef, () => {
    if (isOpenedSelect) {
      hideSelect();
    }
  });

  useKeyPressEvent('Escape', () => {
    if (isOpenedSelect) {
      hideSelect();
    }
  });

  return (
    <Wrapper ref={languagesRef}>
      <Alert isShown={isShownAlert} setIsShown={setIsShownAlert}>
        You need to select at least one language
      </Alert>
      <LanguagesWrapper>
        <LanguagesTitle>My language is</LanguagesTitle>
        <LanguagesValue
          type="button"
          isOpened={isOpenedSelect}
          onClick={toggleSelect}
        >
          {selectedOptions.map((item) => item.label).join(', ')}
        </LanguagesValue>
      </LanguagesWrapper>
      {isOpenedSelect && (
        <LanguagesListWrapper>
          <SubTitle>Choose language</SubTitle>
          {languages.map((item) => (
            <LanguagesItem
              key={item.value}
              language={item}
              isSelected={selectedOptions.includes(item)}
              onChange={handleLanguageChange}
            />
          ))}
        </LanguagesListWrapper>
      )}
    </Wrapper>
  );
};
