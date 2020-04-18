import React, { memo, useContext } from 'react';
import styled from 'styled-components';
import { Icon } from '@components/UI/Icon';
import { SkillCounter } from '@components/UI/SkillCounter';
import { HEADER_APPEARANCE } from '@common/constants';
import { CollapsedHeader } from '@context/collapsedHeader';
import { Languages } from './components/Languages';

const Wrapper = styled.header`
  display: flex;
  align-items: center;
  padding: ${({ isCollapsedHeader }) =>
    isCollapsedHeader ? '40px 0' : '71px 0'};
  transition: padding ${({ theme }) => theme.transition.slow} ease;
`;

const Counter = styled(SkillCounter)`
  position: relative;
  top: 1px;
  padding: 6px 8px;
  margin-right: 11px;
  font-size: ${({ theme }) => theme.fonts.size.xs};
  font-weight: ${({ theme }) => theme.fonts.weight.bigMedium};
  border-radius: ${({ theme }) => theme.borderRadius.s};
`;

const Slogan = styled.div`
  padding-top: 5px;
  font-weight: ${({ theme }) => theme.fonts.weight.medium};
  color: ${({ theme }) => theme.colors.orange};
  opacity: 0;
  transition: ease ${({ theme }) => theme.transition.default} opacity;
`;

const Logo = styled(Icon)`
  margin-right: 11px;
  color: ${({ theme }) => theme.colors.purple};
`;

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;

  &:hover {
    ${Slogan} {
      opacity: 1;
    }

    ${Counter} {
      transform: rotate(0);
    }
  }
`;

const HeaderComponent = ({ appearance, className }) => {
  const { isCollapsedHeader } = useContext(CollapsedHeader);

  return (
    <Wrapper isCollapsedHeader={isCollapsedHeader} className={className}>
      <LogoWrapper>
        <Logo name="logo" width={94} height={16} />
        <Counter>+1</Counter>
        <Slogan>Skills in 15 minutes</Slogan>
      </LogoWrapper>
      {appearance === HEADER_APPEARANCE.WITH_LANGUAGES && <Languages />}
    </Wrapper>
  );
};

const Header = memo(HeaderComponent);

Header.Logo = Logo;

export { Header };
