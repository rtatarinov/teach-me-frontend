import React, { memo } from 'react';
import { default as MediaScreen } from 'react-media';
import { QUERY_EXPRESSIONS } from '@styles/constants';

const MediaComponent = ({
  queryExpression = QUERY_EXPRESSIONS.MOBILE,
  matchedBlock = null,
  replacedBlock = null,
}) => (
  <MediaScreen query={queryExpression}>
    {(matches) => (matches ? <>{matchedBlock}</> : <>{replacedBlock}</>)}
  </MediaScreen>
);

export const Media = memo(MediaComponent);
