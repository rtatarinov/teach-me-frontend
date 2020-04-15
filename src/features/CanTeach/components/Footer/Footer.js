import React, { useState } from 'react';
import styled from 'styled-components';
import { isEmpty } from '@utils/isEmpty';
import { Content } from '@components/UI/Content';
import { Button } from '@components/UI/Button';
import { ICON_POSITION } from '@styles/constants';
import { ROUTES, REQUEST_STATUS } from '@common/constants';
import { SearchBlock } from './components/SearchBlock';
import { Invitation } from './components/Invitation';

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

export const Footer = ({ selectedTags = [] }) => {
  const hasSelectedTags = !isEmpty(selectedTags);
  const [requestStatus, setRequestStatus] = useState(
    hasSelectedTags ? REQUEST_STATUS.READY : null,
  );

  const handleClickStartButton = () => {
    setRequestStatus(REQUEST_STATUS.SENT);
  };

  return (
    <Content.Footer>
      <BackButton
        bgColor="white"
        color="black"
        icon="arrow"
        iconPosition={ICON_POSITION.PREFIX}
        withoutOutline
        to={ROUTES.WANT_LEARN}
      >
        Back
      </BackButton>
      {requestStatus === REQUEST_STATUS.SENT && (
        <SearchBlock setRequestStatus={setRequestStatus} />
      )}
      {requestStatus === REQUEST_STATUS.SUCCESS && (
        <Invitation setRequestStatus={setRequestStatus} />
      )}
      {requestStatus === REQUEST_STATUS.READY && (
        <StartButton
          bgColor="purple"
          color="white"
          disabled={!hasSelectedTags}
          onClick={handleClickStartButton}
        >
          Start
        </StartButton>
      )}
    </Content.Footer>
  );
};
