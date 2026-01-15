import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Optionals = lazy(() => import('@/Pages/MainTabs/Languages/Swift/Basics/OptionalsAndErrors/Optionals'));
const ErrorHandling = lazy(() => import('@/Pages/MainTabs/Languages/Swift/Basics/OptionalsAndErrors/ErrorHandling'));

const OptionalsAndErrors: RouteObject[] = [
  {
    path: '/swift/basics/optionals-and-errors/optionals',
    element: <Optionals />,
  },
  {
    path: '/swift/basics/optionals-and-errors/error-handling',
    element: <ErrorHandling />,
  },
];

export default OptionalsAndErrors;
