import React, { memo } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: inline-block;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.orange};
  border-radius: ${({ theme }) => theme.borderRadius.default};
  transform: matrix(0.93, -0.36, 0.36, 0.93, 0, 0);
`;

const SkillCounterComponent = ({ children, className }) => (
  <Wrapper className={className}>{children}</Wrapper>
);

export const SkillCounter = memo(SkillCounterComponent);
