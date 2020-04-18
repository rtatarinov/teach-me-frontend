import React, { memo } from 'react';
import { AboutUs } from '@features/AboutUs';
import { useTitle } from 'react-use';
import { PROJECT_NAME } from '@common/constants';

const AboutUsPage = () => {
  useTitle(`About us - ${PROJECT_NAME}`);

  return <AboutUs />;
};

export default memo(AboutUsPage);
