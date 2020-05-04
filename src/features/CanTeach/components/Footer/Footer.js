import React, { useState } from 'react';
import styled from 'styled-components';
import { useUpdateEffect, useAsyncFn } from 'react-use';
import { isEmpty } from '@utils/isEmpty';
import { Content } from '@components/UI/Content';
import { Button } from '@components/UI/Button';
import { ICON_POSITION } from '@styles/constants';
import { ROUTES, REQUEST_STATUS } from '@common/constants';
import { Alert } from '@components/UI/Alert';
import { media } from '@styles/utils';
import { useRequest } from '@hooks/useRequest';
import { getToken } from '@utils/token';
import { SearchBlock } from './components/SearchBlock';
import { Invitation } from './components/Invitation';

const BackButton = styled(Button)`
  ${Button.Children} {
    font-size: ${({ theme }) => theme.fonts.size.s};
    ${media.MOBILE`
      min-width: 0;
    `}
  }

  ${Button.Icon} {
    margin-right: 7px;
  }
`;

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const TIME_OF_MATCHING = 5000;

export const Footer = ({ selectedTags = [] }) => {
  const hasSelectedTags = !isEmpty(selectedTags);
  const [requestStatus, setRequestStatus] = useState(
    hasSelectedTags ? REQUEST_STATUS.READY : null,
  );
  const [error, setError] = useState(null);
  const [matchedLink, setMatchedLink] = useState(null);

  const wantToLearnTags = window.localStorage
    .getItem('wantToLearnTags')
    .slice(0, -1)
    .substr(1)
    .split(',')
    .map((item) => Number(item));

  const selectedLanguages = window.localStorage
    .getItem('selectedLanguages')
    .split(',');

  const [{ data: matchedConference }, getMatchedConference] = useRequest({
    url: '/matches/conference',
    withCredentials: true,
  });

  const [{ isLoading }, createConference] = useRequest({
    url: '/users',
    method: 'post',
    withCredentials: true,
    onSuccess: () => {
      setRequestStatus(REQUEST_STATUS.SENT);
      getMatchedConference();
    },
    onError: (errors) => {
      setError(errors);
    },
  });

  const handleClickStartButton = () => {
    const payload = {
      alreadyKnow: selectedTags,
      wantToKnow: wantToLearnTags,
      lang: selectedLanguages,
    };

    createConference(payload);
  };

  // eslint-disable-next-line
  const [_, reFetchMatchedConference] = useAsyncFn(async () => {
    await sleep(TIME_OF_MATCHING);
    getMatchedConference();
  });

  useUpdateEffect(() => {
    setRequestStatus(hasSelectedTags ? REQUEST_STATUS.READY : null);
  }, [hasSelectedTags]);

  useUpdateEffect(() => {
    if (requestStatus !== REQUEST_STATUS.SENT) {
      return;
    }

    if (isEmpty(matchedConference)) {
      reFetchMatchedConference();
    } else {
      const result = matchedConference.find(
        (item) => item.userId === `Bearer ${getToken()}`,
      );

      setMatchedLink(result.link);
      setRequestStatus(REQUEST_STATUS.SUCCESS);
    }
  }, [matchedConference]);

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
      {requestStatus === REQUEST_STATUS.SUCCESS && matchedLink && (
        <Invitation link={matchedLink} />
      )}
      {requestStatus === REQUEST_STATUS.READY && (
        <Button
          bgColor="purple"
          color="white"
          disabled={!hasSelectedTags || isLoading}
          onClick={handleClickStartButton}
        >
          Start
        </Button>
      )}
      <Alert isShown={error} setIsShown={setError}>
        Server error
      </Alert>
    </Content.Footer>
  );
};
