import React, { memo } from 'react';
import styled from 'styled-components';
import { Icon } from '@components/UI/Icon';

const Social = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.gray};
  border-radius: 50%;
  transition: ease ${({ theme }) => theme.transition.default} background-color;

  &:hover {
    background-color: ${({ theme }) => theme.colors.purple};
  }
`;

const SocialItemComponent = ({ icon, link, className }) => (
  <Social
    href={icon === 'email' ? `mailto: ${link}` : link}
    className={className}
  >
    <Icon name={icon} width={20} height={20} />
  </Social>
);

export const SocialItem = memo(SocialItemComponent);
