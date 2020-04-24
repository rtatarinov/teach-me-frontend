import React from 'react';
import { Router } from 'react-router';
import { history } from '@src/history';
import { Routes } from '@src/routers';
import { CollapsedHeaderProvider } from '@context/collapsedHeader';

export const Root = () => (
  <Router history={history}>
    <CollapsedHeaderProvider>
      <Routes />
    </CollapsedHeaderProvider>
  </Router>
);
