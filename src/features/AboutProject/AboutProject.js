import React from 'react';
import styled from 'styled-components';
import { Layout } from '@components/UI/Layout';
import { Button } from '@components/UI/Button';
import { ROUTES } from '@common/constants';

const Wrapper = styled(Layout)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  padding-bottom: 165px;
  text-align: center;
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

export const AboutProject = () => (
  <Wrapper>
    <SupermanImg src="/img/superman.png" alt="superman" />
    <Description>
      &ldquo;Teach me&rdquo; is a project that brings people together. The main
      goal is to teach the interlocutor one skill.
    </Description>
    <Button to={ROUTES.WANT_LEARN}>Next</Button>
  </Wrapper>
);
