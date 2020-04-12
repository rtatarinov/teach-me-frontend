import React, { Suspense, lazy } from 'react';
import { useEffectOnce } from 'react-use';
import { withRouter, Switch } from 'react-router';
import { Route } from 'react-router-dom';
import { ROUTES } from '@common/constants';
import { Loader } from '@components/UI/Loader';
import { history } from '@src/history';

const HomePage = lazy(() => import('@pages/HomePage'));
const AboutProjectPage = lazy(() => import('@pages/AboutProjectPage'));
const WantToLearnPage = lazy(() => import('@pages/WantToLearnPage'));
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
        <Route exact path={ROUTES.ABOUT_PROJECT} component={AboutProjectPage} />
        <Route exact path={ROUTES.WANT_LEARN} component={WantToLearnPage} />
        <Route path="*" component={NotFoundPage} />
      </Switch>
    </Suspense>
  );
};

export const Routes = withRouter(RoutesList);
