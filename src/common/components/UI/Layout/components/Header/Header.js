import React, { memo } from 'react';
import styled from 'styled-components';
import { Icon } from '@components/UI/Icon';
import { SkillCounter } from '@components/UI/SkillCounter';

const Wrapper = styled.header`
  padding: 71px 0;
`;

const StyledIcon = styled(Icon)`
  margin-right: 11px;
`;

const Counter = styled(SkillCounter)`
  padding: 6px 8px;
  font-size: ${({ theme }) => theme.fonts.size.xs};
  border-radius: ${({ theme }) => theme.borderRadius.s};
`;

const HeaderComponent = () => (
  <Wrapper>
    <StyledIcon name="logo" width={94} height={16} />
    <Counter>+1</Counter>
  </Wrapper>
);

export const Header = memo(HeaderComponent);
