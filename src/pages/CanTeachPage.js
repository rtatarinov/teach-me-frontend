import React, { memo } from 'react';
import { CanTeach } from '@features/CanTeach';
import { useTitle } from 'react-use';
import { PROJECT_NAME } from '@common/constants';

const CanTeachPage = () => {
  useTitle(`I can teach - ${PROJECT_NAME}`);

  return <CanTeach />;
};

export default memo(CanTeachPage);
