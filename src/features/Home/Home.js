import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { opacify } from 'polished';
import { ROUTES } from '@common/constants';
import { Icon } from '@components/UI/Icon';

const Wrapper = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100vh;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.black};
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

const Counter = styled.div`
  position: absolute;
  top: -93px;
  right: -127px;
  padding: 14px 16px;
  font-size: ${({ theme }) => theme.fonts.size.l};
  font-weight: ${({ theme }) => theme.fonts.weight.bold};
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.orange};
  border-radius: ${({ theme }) => theme.borderRadius.default};
  transform: matrix(0.93, -0.36, 0.36, 0.93, 0, 0);

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

export const Home = () => (
  <Wrapper to={ROUTES.ABOUT_PROJECT}>
    <Presentation>
      <Counter>+1</Counter>
      <Logo name="logo" width={392} height={66} />
      <Description>+ 1 skill in 15 minutes</Description>
    </Presentation>
  </Wrapper>
);
