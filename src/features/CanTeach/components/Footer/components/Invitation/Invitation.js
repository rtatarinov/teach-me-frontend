import React, { memo } from 'react';
import styled from 'styled-components';
import { Button } from '@components/UI/Button';

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

  ${Button.Children} {
    min-width: 138px;
  }
`;

const InvitationComponent = () => {
  const handleClickAcceptButton = () => {};

  return (
    <Wrapper>
      <TextWrapper>
        If the conversation partner does not connect, restart the search
      </TextWrapper>
      <AcceptButton
        bgColor="green"
        color="white"
        onClick={handleClickAcceptButton}
      >
        Accept
      </AcceptButton>
    </Wrapper>
  );
};

export const Invitation = memo(InvitationComponent);
