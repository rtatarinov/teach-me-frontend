import React from 'react';
import styled from 'styled-components';
import { Button } from '@components/UI/Button';
import { StopWatch } from '@components/StopWatch';
import { REQUEST_STATUS } from '@common/constants';
import { useScreenSize } from '@hooks/useScreenSize';

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
  const { isMobile } = useScreenSize();
  const handleClickStopButton = () => {
    setRequestStatus(REQUEST_STATUS.READY);
  };

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
        onClick={handleClickStopButton}
      >
        Stop
      </StopButton>
    </Wrapper>
  );
};
