import React, { memo } from 'react';
import styled from 'styled-components';
import { Icon } from '@components/UI/Icon';
import { SkillCounter } from '@components/UI/SkillCounter';
import { HEADER_APPEARANCE } from '@common/constants';
import { Languages } from './components/Languages';

const Wrapper = styled.header`
  display: flex;
  align-items: center;
  padding: 71px 0;
  margin-bottom: 25px;
`;

const StyledIcon = styled(Icon)`
  margin-right: 11px;
`;

const Counter = styled(SkillCounter)`
  padding: 6px 8px;
  margin-right: 15px;
  font-size: ${({ theme }) => theme.fonts.size.xs};
  border-radius: ${({ theme }) => theme.borderRadius.s};
`;

const HeaderComponent = ({ appearance }) => (
  <Wrapper>
    <StyledIcon name="logo" width={94} height={16} />
    <Counter>+1</Counter>
    {appearance === HEADER_APPEARANCE.WITH_LANGUAGES && <Languages />}
  </Wrapper>
);

export const Header = memo(HeaderComponent);
