import React, { useState, useRef } from 'react';
import { useClickAway, useList, useKeyPressEvent } from 'react-use';
import styled from 'styled-components';
import { opacify } from 'polished';
import { media } from '@styles/utils';
import { Content } from '@components/UI/Content';
import { Alert } from '@components/UI/Alert';
import { Button } from '@components/UI/Button';
import { resetButtonStyle, addHoverOpacity } from '@styles/placeholders';
import { useScreenSize } from '@hooks/useScreenSize';
import { LanguagesItem } from './components';
import { languages } from './constants';

const Wrapper = styled.div`
  position: relative;
  z-index: ${({ theme }) => theme.zIndex.languagesList};
  background-color: ${({ theme }) => theme.colors.white};
  ${media.TABLET`
    max-width: calc(100% - 170px);
    margin-left: 20px;
  `}
`;

const LanguagesWrapper = styled.div`
  position: relative;
  left: 15px;
  display: flex;
  align-items: center;
  font-size: ${({ theme }) => theme.fonts.size.s};
  ${media.TABLET`
    left: 0;
  `}
`;

const LanguagesTitle = styled.span`
  padding: 0 8px;
  color: ${({ theme }) => opacify(-0.4, theme.colors.black)};
  white-space: nowrap;
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
  ${media.MOBILE`
    right: 0;
    width: calc(100vw - 50px);
  `}
`;

const SubTitle = styled(Content.SubTitle)`
  padding: 0 24px;
  margin-bottom: 12px;
`;

const LanguagesValue = styled.button`
  ${resetButtonStyle};
  position: relative;
  max-width: 340px;
  padding-right: 15px;
  overflow: hidden;
  font-weight: ${({ theme }) => theme.fonts.weight.bigMedium};
  text-overflow: ellipsis;
  white-space: nowrap;
  ${media.TABLET`
    max-width: 100%;
  `}

  &::after {
    position: absolute;
    top: ${({ isOpened }) => (isOpened ? '8px' : '6px')};
    right: 3px;
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

const StyledButton = styled(Button)`
  padding: 12px 23px;
  margin-top: 10px;
  margin-left: 16px;

  ${Button.Children} {
    font-size: ${({ theme }) => theme.fonts.size.s};
  }
`;

export const Languages = () => {
  const [isShownAlert, setIsShownAlert] = useState(false);
  const [selectedOptions, { push, remove }] = useList([languages[0]]);
  const [isOpenedSelect, setIsOpenedSelect] = useState(false);
  const languagesRef = useRef(null);
  const { isMobile } = useScreenSize();

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
        {!isMobile && <LanguagesTitle>My language is</LanguagesTitle>}
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
          {isMobile && (
            <StyledButton onClick={hideSelect} withoutOutline>
              Apply
            </StyledButton>
          )}
        </LanguagesListWrapper>
      )}
    </Wrapper>
  );
};
