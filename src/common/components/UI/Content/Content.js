import styled from 'styled-components';

const Title = styled.h1`
  margin: 0 0 40px;
  font-size: ${({ theme }) => theme.fonts.size.xl};
  font-weight: ${({ theme }) => theme.fonts.weight.bold};
  line-height: ${({ theme }) => theme.fonts.lineHeight.xl};
`;

const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 60px 0 80px;
`;

export const Content = { Title, Footer };
