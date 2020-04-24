import React, { memo } from 'react';
import styled from 'styled-components';
import { Button } from '@components/UI/Button';
import { useScreenSize } from '@hooks/useScreenSize';
import { Timer } from '@components/Timer';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const TextWrapper = styled.div`
  max-width: 300px;
  font-weight: ${({ theme }) => theme.fonts.weight.medium};
  text-align: right;
`;

const AcceptButton = styled(Button)`
  margin-left: 70px;
`;

const StyledTimer = styled(Timer)`
  margin-left: 7px;
  opacity: 0.75;
`;

const InvitationComponent = () => {
  const { isMobile } = useScreenSize();
  const handleClickAcceptButton = () => {};
  const handleExpire = () => {};

  return (
    <Wrapper>
      {!isMobile && (
        <TextWrapper>
          If the conversation partner does not connect, restart the search
        </TextWrapper>
      )}
      <AcceptButton
        bgColor="green"
        color="white"
        onClick={handleClickAcceptButton}
      >
        Accept
        <StyledTimer onExpire={handleExpire} withAutoStart />
      </AcceptButton>
    </Wrapper>
  );
};

export const Invitation = memo(InvitationComponent);
