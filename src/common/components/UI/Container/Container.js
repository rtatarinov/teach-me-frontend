import React, { memo } from 'react';
import styled from 'styled-components';
import { CONTAINER_TYPES } from '@styles/constants';
import { media } from '@styles/utils';

const Wrapper = styled.div`
  max-width: ${({ theme, size }) => `${theme.containerWidth[size]}`};
  margin: 0 auto;
  ${media.TABLET`
    max-width: calc(100% - 100px);
  `}
  ${media.MOBILE`
    max-width: calc(100% - 50px);
  `}
`;

const ContainerComponent = ({
  children,
  className,
  size = CONTAINER_TYPES.DEFAULT,
}) => (
  <Wrapper size={size} className={className}>
    {children}
  </Wrapper>
);

export const Container = memo(ContainerComponent);
