import React, { memo } from 'react';
import styled from 'styled-components';
import { Button } from '@components/UI/Button';
/* import { useScreenSize } from '@hooks/useScreenSize';
import { Timer } from '@components/Timer'; */

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

/* const TextWrapper = styled.div`
  max-width: 300px;
  font-weight: ${({ theme }) => theme.fonts.weight.medium};
  text-align: right;
`; */

const AcceptButton = styled(Button)`
  margin-left: 70px;

  ${Button.Children} {
    text-align: center;
  }
`;

const InvitationComponent = ({ link }) => {
  // const { isMobile } = useScreenSize();

  return (
    <Wrapper>
      {/*      {!isMobile && (
        <TextWrapper>
          If the conversation partner does not connect, restart the search
        </TextWrapper>
      )} */}
      <AcceptButton bgColor="green" color="white" href={link}>
        Accept
        {/* <StyledTimer onExpire={handleExpire} withAutoStart /> */}
      </AcceptButton>
    </Wrapper>
  );
};

export const Invitation = memo(InvitationComponent);
