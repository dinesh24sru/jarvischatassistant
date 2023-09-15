import React from 'react';
import { useRoutes } from 'react-router';
import { Login } from '../public-screens/login';
import { Register } from '../public-screens/register';
import { ContentLayout } from '../layout';
import { Dashboard } from '../screens/dashbord';
import { Customer } from '../screens/customer';
import { PromptLib } from '../screens/promptlib';

const Routes = () => {
  const routes = useRoutes([
    {
      path: '/app',
      element: <ContentLayout />,
      children: [
        { path: 'dashboard', element: <Dashboard /> },
        { path: 'customer', element: <Customer /> },
        { path: 'prompt-lib', element: <PromptLib /> },
      ],
    },
    {
      path: 'login',
      element: <Login />,
    },
    {
      path: 'register',
      element: <Register />,
    },
  ]);

  return routes;
};

export { Routes };
