import { opacify } from 'polished';
import styled from 'styled-components';

const Title = styled.h1`
  margin: 0 0 40px;
  font-size: ${({ theme }) => theme.fonts.size.xl};
  font-weight: ${({ theme }) => theme.fonts.weight.bold};
  line-height: ${({ theme }) => theme.fonts.lineHeight.xl};
`;

const Footer = styled.footer`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: linear-gradient(
    360deg,
    ${({ theme }) => theme.colors.white} 63.15%,
    rgba(255, 255, 255, 0) 100%
  );
  padding: 60px 70px 79px;
`;

const OnlineTagsMessage = styled.div`
  position: relative;
  padding-left: 38px;
  margin-top: 60px;
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

export const Content = { Title, Footer, OnlineTagsMessage };
