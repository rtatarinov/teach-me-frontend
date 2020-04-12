import React from 'react';
import { useTitle } from 'react-use';
import { PROJECT_NAME } from '@common/constants';
import { Error } from '@components/UI/Error';

const NotFoundPage = () => {
  useTitle(`Страница не найдена - ${PROJECT_NAME}`);

  return <Error>Page not found</Error>;
};

export default NotFoundPage;