import React, { lazy } from 'react';
import { Redirect } from 'react-router-dom';
import SignIn from './views/accounts/Login/Login';
import SignUp, { Register } from './views/accounts/Register/Register';
import Dashboard from './views/dashboard/Dashboard';
import Error404 from './views/Error404/Error404';
import PrivateRoute from './PrivateRoute';

const routes = [
  {
    path: '/account/login',
    exact: true,
    component: () => <SignIn />
  },
  {
    path: '/account/register',
    exact: true,
    component: () =>  <SignUp />
  },
  {
    route: '*',
    component: Dashboard,
    routes: [
      {
        path: '/drive/my-drive',
        exact: true,
        component: lazy(() => import('./views/dashboard/views/Drive/Drive'))
      },
      {
        path: '/drive/shared-with-me',
        exact: true,
        component: lazy(() => import('./views/dashboard/views/SharedWithMe/SharedWithMe'))
      },
      {
        path: '/drive/recent',
        exact: true,
        component: lazy(() => import('./views/dashboard/views/Recent/Recent'))
      },
      {
        path: '/drive/starred',
        exact: true,
        component: lazy(() => import('./views/dashboard/views/Starred/Starred'))
      },
      {
        path: '/drive/trash',
        exact: true,
        component: lazy(() => import('./views/dashboard/views/Trash/Trash'))
      },
      {
        path: '/',
        exact: true,
        component: () => <Redirect to="/drive/my-drive" />
      },
      {
        path: '/drive',
        exact: true,
        component: () => <Redirect to="/drive/my-drive" />
      },
    ]
  },
];

export default routes;
