import React from 'react';
import styled from 'styled-components';
import { Layout } from '@components/Layout';
import { Button } from '@components/UI/Button';
import { ROUTES } from '@common/constants';
import { useScreenSize } from '@hooks/useScreenSize';

const styles = `
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  text-align: center;
`;

const MobileWrapper = styled.div`
  ${styles};
  min-height: 100vh;
`;

const Wrapper = styled(Layout)`
  padding-bottom: 165px;
  ${styles};
`;

const SupermanImg = styled.img`
  margin-bottom: 30px;
`;

const Description = styled.p`
  max-width: 480px;
  margin: 0 auto 62px;
  font-size: ${({ theme }) => theme.fonts.size.l};
  line-height: ${({ theme }) => theme.fonts.lineHeight.l};
`;

const Content = () => (
  <>
    <SupermanImg src="/img/superman.png" alt="superman" />
    <Description>
      &ldquo;Teach me&rdquo; is a project that brings people together. The main
      goal is to teach the interlocutor one skill.
    </Description>
    <Button to={ROUTES.WANT_LEARN}>Next</Button>
  </>
);

export const AboutProject = () => {
  const { isMobile } = useScreenSize();

  return isMobile ? (
    <MobileWrapper>
      <Content />
    </MobileWrapper>
  ) : (
    <Wrapper>
      <Content />
    </Wrapper>
  );
};
