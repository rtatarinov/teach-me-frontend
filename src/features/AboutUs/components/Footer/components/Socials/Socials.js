import React from 'react';
import styled from 'styled-components';
import { SocialItem } from './components/SocailItem';

const Wrapper = styled.section`
  display: flex;
  align-items: center;
`;

const Item = styled(SocialItem)`
  &:not(:last-child) {
    margin-right: 30px;
  }
`;

const Title = styled.h3`
  margin: 0 45px 0 0;
  font-size: ${({ theme }) => theme.fonts.size.default};
  font-weight: ${({ theme }) => theme.fonts.weight.regular};
  color: ${({ theme }) => theme.colors.purple};
`;

const socialsList = [
  {
    icon: 'email',
    link: 'teachme1skill@gmail.com',
  },
  {
    icon: 'instagram',
    link: 'https://www.instagram.com/teachmeweb/',
  },
  {
    icon: 'facebook',
    link: 'https://www.facebook.com/Teach-Me-101925731497537',
  },
  {
    icon: 'telegram',
    link: 'https://t.me/joinchat/CDfAXBiq_pO1A03em3hK3g',
  },
];

export const Socials = () => (
  <Wrapper>
    <Title>Follow us</Title>
    {socialsList.map(({ icon, link }) => (
      <Item key={icon} icon={icon} link={link} target="_blank" />
    ))}
  </Wrapper>
);
