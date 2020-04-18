import React, { memo } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  transform: rotate(-20deg);
`;

const SkillCounterComponent = ({ className }) => (
  <Wrapper className={className}>
    <img src="/img/plus_one.svg" alt="+1 skill" />
  </Wrapper>
);

export const SkillCounter = memo(SkillCounterComponent);
