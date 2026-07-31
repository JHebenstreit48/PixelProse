import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const ExceptionsBasics = lazy(() => import('@/pages/mainTabs/Languages/Java/Basics/Exceptions/ExceptionsBasics'));
const TryWithResources = lazy(() => import('@/pages/mainTabs/Languages/Java/Basics/Exceptions/TryWithResources'));

const Exceptions: RouteObject[] = [
  {
    path: '/java/basics/exceptions/exceptions-basics',
    element: <ExceptionsBasics />,
  },
  {
    path: '/java/basics/exceptions/try-with-resources',
    element: <TryWithResources />,
  },
];

export default Exceptions;
