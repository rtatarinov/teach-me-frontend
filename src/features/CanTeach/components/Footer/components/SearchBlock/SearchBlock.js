import React, { useState } from 'react';
import styled from 'styled-components';
import { Button } from '@components/UI/Button';
import { StopWatch } from '@components/StopWatch';
import { Alert } from '@components/UI/Alert';
import { REQUEST_STATUS } from '@common/constants';
import { useScreenSize } from '@hooks/useScreenSize';
import { useRequest } from '@hooks/useRequest';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const TextWrapper = styled.div`
  font-weight: ${({ theme }) => theme.fonts.weight.medium};
  text-align: right;
`;

const StopButton = styled(Button)`
  margin-left: 70px;
`;

export const SearchBlock = ({ setRequestStatus }) => {
  const [error, setError] = useState(null);
  const { isMobile } = useScreenSize();

  const [{ isLoading }, deleteConference] = useRequest({
    url: '/users',
    method: 'delete',
    withCredentials: true,
    onSuccess: () => {
      setRequestStatus(REQUEST_STATUS.READY);
    },
    onError: (errors) => {
      setError(errors);
    },
  });

  return (
    <Wrapper>
      {!isMobile && (
        <TextWrapper>
          <StopWatch autoStart />
          <div>Search for someone to talk to</div>
        </TextWrapper>
      )}
      <StopButton
        bgColor="purple"
        color="white"
        onClick={deleteConference}
        disabled={isLoading}
      >
        Stop
      </StopButton>
      <Alert isShown={error} setIsShown={setError}>
        Server error
      </Alert>
    </Wrapper>
  );
};
