import React, { memo } from 'react';
import { history } from '@src/history';
import { Loader } from '@components/UI/Loader';
import { ROUTES } from '@common/constants';
import { useEffectOnce } from 'react-use';

const LoginPage = () => {
  useEffectOnce(() => {
    // TODO create url request for login
    setTimeout(() => {
      history.push(ROUTES.WANT_LEARN);
    }, 2000);
  });

  return <Loader />;
};

export default memo(LoginPage);
