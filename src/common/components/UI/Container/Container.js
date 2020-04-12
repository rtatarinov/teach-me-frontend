import React, { memo } from 'react';
import styled from 'styled-components';
import { CONTAINER_TYPES } from '@styles/constants';

const Wrapper = styled.div`
  max-width: ${({ theme, size }) => `${theme.containerWidth[size]}`};
  margin: 0 auto;
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
