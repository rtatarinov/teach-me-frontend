import React, { memo } from 'react';
import styled from 'styled-components';

const StyledError = styled.div`
  font-size: ${({ theme }) => theme.fonts.size.s};
  color: ${({ theme }) => theme.colors.purple};
`;

const ErrorComponent = ({ children, className }) => {
  const isArray = Array.isArray(children);

  if (isArray) {
    return children.map((error, index) => (
      // eslint-disable-next-line react/no-array-index-key
      <StyledError className={className} key={index}>
        {error}
      </StyledError>
    ));
  }

  return <StyledError className={className}>{children}</StyledError>;
};

export const Error = memo(ErrorComponent);
