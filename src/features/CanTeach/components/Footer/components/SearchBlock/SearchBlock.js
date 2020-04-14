import React from 'react';
import styled from 'styled-components';
import { opacify } from 'polished';

const Wrapper = styled.div`
  margin-left: auto;
  font-weight: ${({ theme }) => theme.fonts.weight.medium};
`;

const TimerText = styled.div`
  margin-bottom: 7px;
  text-align: right;
  color: ${({ theme }) => opacify(-0.4, theme.colors.black)};
`;

export const SearchBlock = () => (
  <Wrapper>
    <TimerText>01:23</TimerText>
    <div>Search for someone to talk to</div>
  </Wrapper>
);
