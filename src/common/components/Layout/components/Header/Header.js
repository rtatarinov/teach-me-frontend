import React, { memo, useContext } from 'react';
import styled from 'styled-components';
import { QUERIES, QUERY_EXPRESSIONS } from '@styles/constants';
import { HEADER_APPEARANCE } from '@common/constants';
import { CollapsedHeader } from '@context/collapsedHeader';
import { Icon } from '@components/UI/Icon';
import { SkillCounter } from '@components/UI/SkillCounter';
import { Media } from '@components/Media';
import { media } from '@styles/utils';
import { Languages } from './components/Languages';
import { Navigation } from './components/Navigation';

const Wrapper = styled.header`
  display: flex;
  align-items: center;
  padding: ${({ isCollapsedHeader }) =>
    isCollapsedHeader ? '40px 0' : '71px 0'};
  transition: padding ${({ theme }) => theme.transition.slow} ease;
  ${media.TABLET`
    padding: 50px 0;
  `};
`;

const Counter = styled(SkillCounter)`
  width: 22px;
  height: 24px;
  margin-right: 11px;
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
  margin-right: auto;

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
        <Counter />
        <Media
          queryExpression={QUERY_EXPRESSIONS.TABLET}
          replacedBlock={<Slogan>Skills in 15 minutes</Slogan>}
        />
      </LogoWrapper>
      {appearance === HEADER_APPEARANCE.WITH_NAVIGATION && (
        <>
          <Media
            queryExpression={QUERY_EXPRESSIONS.TABLET}
            replacedBlock={<Navigation />}
          />
          <Languages />
        </>
      )}
    </Wrapper>
  );
};

const Header = memo(HeaderComponent);

Header.Logo = Logo;

export { Header };
