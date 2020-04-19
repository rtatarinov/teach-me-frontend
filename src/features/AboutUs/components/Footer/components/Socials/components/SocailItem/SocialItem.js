import React, { memo } from 'react';
import styled from 'styled-components';
import { Icon } from '@components/UI/Icon';

const Social = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: ${({ theme }) => theme.colors.gray};
  border-radius: 50%;

  &:hover {
    background-color: ${({ theme }) => theme.colors.purple};
  }
`;

const SocialItemComponent = ({ icon, link, className }) => (
  <Social
    href={icon === 'email' ? `mailto: ${link}` : link}
    className={className}
  >
    <Icon name={icon} width={40} height={40} />
  </Social>
);

export const SocialItem = memo(SocialItemComponent);
