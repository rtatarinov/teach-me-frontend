import React, { memo } from 'react';
import styled from 'styled-components';
import { Button } from '@components/UI/Button';
import { BUTTON_APPEARANCE } from '@styles/constants';
import { REQUEST_STATUS } from '@common/constants';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const TextWrapper = styled.div`
  font-weight: ${({ theme }) => theme.fonts.weight.medium};
  text-align: right;
`;

const CancelButton = styled(Button)`
  position: relative;
  left: 7px;

  ${Button.Children} {
    font-size: ${({ theme }) => theme.fonts.size.default};
  }
`;

const AcceptButton = styled(Button)`
  margin-left: 70px;

  ${Button.Children} {
    min-width: 138px;
  }
`;

const InvitationComponent = ({ setRequestStatus }) => {
  const handleClickCancelButton = () => {
    setRequestStatus(REQUEST_STATUS.READY);
  };

  const handleClickAcceptButton = () => {};

  return (
    <Wrapper>
      <TextWrapper>
        <CancelButton
          appearance={BUTTON_APPEARANCE.CLEAR}
          color="orange"
          onClick={handleClickCancelButton}
        >
          Cancel
        </CancelButton>
        <div>Conversationalist found</div>
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
