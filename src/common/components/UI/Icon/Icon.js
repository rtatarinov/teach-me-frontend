import React, { memo } from 'react';
import styled from 'styled-components';

const IconWrapper = styled.svg`
  display: inline-block;
  flex-shrink: 0;
  width: ${({ width }) => `${width}px`};
  height: ${({ height }) => `${height}px`};
  vertical-align: middle;
  fill: currentColor;
`;

const IconComponent = ({ name, width = 20, height = 20, className }) => (
  <IconWrapper width={width} height={height} className={className}>
    <use xlinkHref={`/sprite.svg#sprite-${name}`} />
  </IconWrapper>
);

export const Icon = memo(IconComponent);
