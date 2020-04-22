import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { getToken } from '@utils/token';
import { ROUTES } from '@common/constants';

export const PrivateRoute = ({ component: Component, ...rest }) => {
  if (!getToken()) return <Redirect to={ROUTES.SIGN_IN} />;

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Route {...rest} render={(props) => <Component {...props} {...rest} />} />
  );
};
