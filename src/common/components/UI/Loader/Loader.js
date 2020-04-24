import React, { memo } from 'react';
import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0);
  }

  to {
    transform: rotate(360deg);
  }
`;

const Wrapper = styled.div`
  position: ${({ isStatic }) => (isStatic ? 'static' : 'absolute')};
  width: 40px;
  height: 40px;
  ${({ isStatic }) =>
    !isStatic &&
    `
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  `}
`;

const CircularLoader = styled.div`
  width: 100%;
  height: 100%;
  border-color: transparent transparent transparent
    ${({ theme }) => theme.colors.purple};
  border-style: solid;
  border-width: 2px;
  border-radius: 100%;
  animation: ${rotate} 0.5s linear infinite;
`;

const LoaderComponent = ({ isStatic, className }) => (
  <Wrapper className={className} isStatic={isStatic}>
    <CircularLoader />
  </Wrapper>
);

export const Loader = memo(LoaderComponent);
