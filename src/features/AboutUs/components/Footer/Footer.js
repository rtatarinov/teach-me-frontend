import React from 'react';
import styled from 'styled-components';
import { history } from '@src/history';
import { Content } from '@components/UI/Content';
import { Button } from '@components/UI/Button';
import { ICON_POSITION } from '@styles/constants';
import { Socials } from './components/Socials';

const BackButton = styled(Button)`
  ${Button.Children} {
    font-size: ${({ theme }) => theme.fonts.size.s};
  }

  ${Button.Icon} {
    margin-right: 7px;
  }
`;

const StartButton = styled(Button)`
  ${Button.Children} {
    min-width: 138px;
  }
`;

export const Footer = () => {
  const handleClickBackButton = () => {
    history.goBack();
  };

  return (
    <Content.Footer>
      <BackButton
        bgColor="white"
        color="black"
        icon="arrow"
        iconPosition={ICON_POSITION.PREFIX}
        withoutOutline
        onClick={handleClickBackButton}
      >
        Back
      </BackButton>
      <Socials />
    </Content.Footer>
  );
};
