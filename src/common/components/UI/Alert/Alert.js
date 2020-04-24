import React, { memo } from 'react';
import { useUpdateEffect } from 'react-use';
import styled from 'styled-components';
import { addHoverOpacity, resetButtonStyle } from '@styles/placeholders';

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: ${({ theme }) => theme.zIndex.alert};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 50px;
  padding: 10px 15px;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.red};
  transition: ease ${({ theme }) => theme.transition.default} transform;
  transform: ${({ isShown }) =>
    isShown ? `translateY(0)` : `translateY(-100%)`};
`;

const CloseButton = styled.button`
  ${resetButtonStyle};
  position: relative;
  width: 24px;
  height: 24px;
  margin-left: 16px;
  background-color: #e7694d;
  border-radius: 50%;
  ${addHoverOpacity};

  &::before,
  &::after {
    position: absolute;
    top: 11px;
    width: 12px;
    height: 2px;
    content: '';
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: ${({ theme }) => theme.borderRadius.xm};
  }

  &::before {
    left: 6px;
    transform: rotate(45deg);
  }

  &::after {
    right: 6px;
    transform: rotate(-45deg);
  }
`;

const TIME_OF_SHOW_ALERT = 3000;

const AlertComponent = ({
  children,
  isShown,
  setIsShown,
  shownTime = TIME_OF_SHOW_ALERT,
}) => {
  const hideAlert = () => {
    setIsShown(false);
  };

  const delayHideAlert = () => {
    setTimeout(() => {
      if (isShown) {
        setIsShown(false);
      }
    }, shownTime);
  };

  useUpdateEffect(() => {
    if (isShown) {
      delayHideAlert();
    }

    return () => {
      if (!isShown) {
        clearTimeout(delayHideAlert);
      }
    };
  }, [isShown]);

  return (
    <Wrapper isShown={isShown}>
      {children}
      <CloseButton type="button" onClick={hideAlert} />
    </Wrapper>
  );
};

export const Alert = memo(AlertComponent);
