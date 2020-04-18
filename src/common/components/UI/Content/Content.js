import { opacify } from 'polished';
import styled from 'styled-components';
import { media } from '@styles/utils';

const Title = styled.h1`
  margin: 0 0 40px;
  font-size: ${({ theme }) => theme.fonts.size.xl};
  font-weight: ${({ theme }) => theme.fonts.weight.bold};
  line-height: ${({ theme }) => theme.fonts.lineHeight.xl};
`;

const SubTitle = styled.h2`
  margin: 0 0 20px;
  font-size: ${({ theme }) => theme.fonts.size.m};
  font-weight: ${({ theme }) => theme.fonts.weight.bigMedium};
`;

const Footer = styled.footer`
  position: fixed;
  bottom: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 60px 70px 50px;
  background: linear-gradient(
    360deg,
    ${({ theme }) => theme.colors.white} 63.15%,
    rgba(255, 255, 255, 0) 100%
  );
  ${media.TABLET`
    padding: 50px
  `}
`;

const OnlineTagsMessage = styled.div`
  position: relative;
  padding-left: 38px;
  margin-top: 30px;
  color: ${({ theme }) => opacify(-0.4, theme.colors.black)};

  &::before {
    position: absolute;
    top: 50%;
    left: 20px;
    width: 6px;
    height: 6px;
    content: '';
    background-color: ${({ theme }) => theme.colors.orange};
    border-radius: 50%;
    transform: translateY(-50%);
  }
`;

export const Content = { Title, SubTitle, Footer, OnlineTagsMessage };
