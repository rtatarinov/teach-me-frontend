import React from 'react';
import styled from 'styled-components';
import { Button } from '@components/UI/Button';
import { StopWatch } from '@components/StopWatch';
import { REQUEST_STATUS } from '@common/constants';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const TextWrapper = styled.div`
  text-align: right;
  font-weight: ${({ theme }) => theme.fonts.weight.medium};
`;

const StopButton = styled(Button)`
  margin-left: 70px;

  ${Button.Children} {
    min-width: 138px;
  }
`;

export const SearchBlock = ({ setRequestStatus }) => {
  const handleClickStopButton = () => {
    setRequestStatus(REQUEST_STATUS.READY);
  };

  return (
    <Wrapper>
      <TextWrapper>
        <StopWatch autoStart />
        <div>Search for someone to talk to</div>
      </TextWrapper>
      <StopButton
        bgColor="purple"
        color="white"
        onClick={handleClickStopButton}
      >
        Stop
      </StopButton>
    </Wrapper>
  );
};
