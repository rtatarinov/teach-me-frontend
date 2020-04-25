import React, { Suspense, lazy } from 'react';
import { useEffectOnce } from 'react-use';
import { withRouter, Switch } from 'react-router';
import { Route } from 'react-router-dom';
import { ROUTES } from '@common/constants';
// import { PrivateRoute } from '@components/PrivateRoute';
import { Loader } from '@components/UI/Loader';
import { history } from '@src/history';

const HomePage = lazy(() => import('@pages/HomePage'));
const SignInPage = lazy(() => import('@pages/SignInPage'));
const LoginPage = lazy(() => import('@pages/LoginPage'));
const AboutUsPage = lazy(() => import('@pages/AboutUsPage'));
const WantToLearnPage = lazy(() => import('@pages/WantToLearnPage'));
const CanTeachPage = lazy(() => import('@pages/CanTeachPage'));
const NotFoundPage = lazy(() => import('@pages/NotFoundPage'));

let previousPathname = '';

const RoutesList = () => {
  useEffectOnce(() => {
    history.listen(({ pathname }) => {
      if (pathname !== previousPathname) {
        window.scrollTo(0, 0);

        previousPathname = pathname;
      }
    });
  });

  return (
    <Suspense fallback={<Loader />}>
      <Switch>
        <Route exact path={ROUTES.HOME} component={HomePage} />
        <Route exact path={ROUTES.SIGN_IN} component={SignInPage} />
        <Route exact path={ROUTES.ABOUT_US} component={AboutUsPage} />
        {/* TODO Next to route change to private route */}
        <Route exact path={ROUTES.WANT_LEARN} component={WantToLearnPage} />
        <Route exact path={ROUTES.CAN_TEACH} component={CanTeachPage} />
        <Route exact path={ROUTES.LOGIN_AFTER_ZOOM} component={LoginPage} />
        <Route path="*" component={NotFoundPage} />
      </Switch>
    </Suspense>
  );
};

export const Routes = withRouter(RoutesList);
