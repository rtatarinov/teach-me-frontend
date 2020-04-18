import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useEffectOnce } from 'react-use';
import { opacify } from 'polished';
import { history } from '@src/history';
import { ROUTES } from '@common/constants';
import { Icon } from '@components/UI/Icon';
import { SkillCounter } from '@components/UI/SkillCounter';

const Wrapper = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  color: ${({ theme }) => theme.colors.black};
  text-decoration: none;
`;

const Presentation = styled.div`
  position: relative;
  display: inline-block;
  text-align: center;
`;

const Logo = styled(Icon)`
  margin-bottom: 32px;
  font-size: ${({ theme }) => theme.fonts.size.xxl};
  color: ${({ theme }) => theme.colors.purple};
`;

const Description = styled.div`
  font-size: ${({ theme }) => theme.fonts.size.l};
`;

const Counter = styled(SkillCounter)`
  position: absolute;
  top: -93px;
  right: -127px;
  font-size: ${({ theme }) => theme.fonts.size.l};
  font-weight: ${({ theme }) => theme.fonts.weight.bold};

  & > img {
    width: 48px;
    height: 48px;
  }

  &::before,
  &::after {
    position: absolute;
    content: '';
    border-radius: 50%;
  }

  &::before {
    bottom: 16px;
    left: -50px;
    width: 12px;
    height: 12px;
    background-color: ${({ theme }) => opacify(-0.7, theme.colors.purple)};
  }

  &::after {
    bottom: -47px;
    left: -47px;
    width: 25px;
    height: 25px;
    background-color: ${({ theme }) => opacify(-0.7, theme.colors.orange)};
  }
`;

const TIME_OF_DISPLAY_PAGE = 2000;

export const Home = () => {
  const delayDisplayPage = () => {
    setTimeout(() => {
      history.push(ROUTES.ABOUT_PROJECT);
    }, TIME_OF_DISPLAY_PAGE);
  };

  useEffectOnce(() => {
    delayDisplayPage();

    return () => {
      clearTimeout(delayDisplayPage);
    };
  });

  return (
    <Wrapper to={ROUTES.ABOUT_PROJECT}>
      <Presentation>
        <Counter />
        <Logo name="logo" width={392} height={66} />
        <Description>+ 1 skill in 15 minutes</Description>
      </Presentation>
    </Wrapper>
  );
};
