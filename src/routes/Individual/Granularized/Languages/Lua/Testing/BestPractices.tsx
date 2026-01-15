import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Debugging = lazy(() => import('@/Pages/MainTabs/Languages/Lua/Testing/BestPractices/Debugging'));
const ErrorHandling = lazy(() => import('@/Pages/MainTabs/Languages/Lua/Testing/BestPractices/ErrorHandling'));

const BestPractices: RouteObject[] = [
  {
    path: '/lua/testing/best-practices/debugging',
    element: <Debugging />,
  },
  {
    path: '/lua/testing/best-practices/error-handling',
    element: <ErrorHandling />,
  },
];

export default BestPractices;
