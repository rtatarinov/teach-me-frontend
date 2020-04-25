import React from 'react';
import styled from 'styled-components';
import { Layout } from '@components/Layout';
import { useScreenSize } from '@hooks/useScreenSize';
import { SignIn } from '@features/Auth/SignIn';
import { media } from '@styles/utils';

const styles = `
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
`;

const MobileWrapper = styled.div`
  ${styles};
  height: 100%;
  padding: 0 25px;
`;

const Wrapper = styled(Layout)`
  padding-bottom: 165px;
  ${styles};
  ${media.MOBILE`
   padding-bottom: 0;
  `}
`;

const SupermanImg = styled.img`
  margin-bottom: 30px;
  ${media.MOBILE`
    margin-bottom: 20px;
  `}
`;

const Description = styled.p`
  max-width: 480px;
  margin: 0 auto 62px;
  font-size: ${({ theme }) => theme.fonts.size.l};
  line-height: ${({ theme }) => theme.fonts.lineHeight.l};
  ${media.MOBILE`
    margin-bottom: 40px;
  `}
`;

const Content = () => (
  <>
    <SupermanImg src="/img/superman.png" alt="superman" />
    <Description>
      &ldquo;Teach me&rdquo; is a project that brings people together. The main
      goal is to teach the interlocutor one skill.
    </Description>
    <SignIn />
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
