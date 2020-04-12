import React from 'react';
import { Router } from 'react-router';
import { history } from '@src/history';
import { Routes } from '@src/routers';

export const Root = () => (
  <Router history={history}>
    <Routes />
  </Router>
);
