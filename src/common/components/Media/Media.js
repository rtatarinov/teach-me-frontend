import React, { memo } from 'react';
import { default as MediaScreen } from 'react-media';
import { QUERIES } from '@styles/constants';

const MediaComponent = ({
  queryExpression = QUERIES.MOBILE,
  matchedBlock = null,
  replacedBlock = null,
}) => (
  <MediaScreen query={queryExpression}>
    {(matches) => (matches ? <>{matchedBlock}</> : <>{replacedBlock}</>)}
  </MediaScreen>
);

export const Media = memo(MediaComponent);
