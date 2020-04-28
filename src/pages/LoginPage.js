import React, { memo } from 'react';
import { useLocation, useEffectOnce } from 'react-use';
import { history } from '@src/history';
import { Loader } from '@components/UI/Loader';
import { ROUTES, REDIRECT_URL_AFTER_ZOOM } from '@common/constants';
import { useRequest } from '@hooks/useRequest';
import { setToken } from '@utils/token';

const LoginPage = () => {
  const { search } = useLocation();
  // eslint-disable-next-line no-unused-vars
  const [_, code] = search.split('=');
  // eslint-disable-next-line no-empty-pattern
  const [{}, register] = useRequest({
    url: '/auth',
    method: 'post',
    onSuccess: (data) => {
      const { jwtToken } = data;

      setToken(jwtToken);
      history.push(ROUTES.WANT_LEARN);
    },
  });

  useEffectOnce(() => {
    register({ code, redirectUrl: REDIRECT_URL_AFTER_ZOOM });
  });

  return <Loader />;
};

export default memo(LoginPage);
