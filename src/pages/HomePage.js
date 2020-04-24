import React, { memo } from 'react';
import { Home } from '@features/Home';
import { useTitle } from 'react-use';
import { PROJECT_NAME } from '@common/constants';

const HomePage = () => {
  useTitle(PROJECT_NAME);

  return <Home />;
};

export default memo(HomePage);
