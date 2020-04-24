import React, { memo } from 'react';
import { WantToLearn } from '@features/WantToLearn';
import { useTitle } from 'react-use';
import { PROJECT_NAME } from '@common/constants';

const WantToLearnPage = () => {
  useTitle(`I want to learn - ${PROJECT_NAME}`);

  return <WantToLearn />;
};

export default memo(WantToLearnPage);
