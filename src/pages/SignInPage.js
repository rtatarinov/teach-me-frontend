import React, { memo } from 'react';
import { AboutProject } from '@features/AboutProject';
import { useTitle } from 'react-use';
import { PROJECT_NAME } from '@common/constants';

const SignInPage = () => {
  useTitle(`About project - ${PROJECT_NAME}`);

  return <AboutProject />;
};

export default memo(SignInPage);
