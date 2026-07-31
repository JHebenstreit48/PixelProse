import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Multithreading = lazy(() => import('@/pages/mainTabs/Languages/CFamily/CPlusPlus/Advanced/ConcurrencyAndErrorHandling/Multithreading'));
const ExceptionHandling = lazy(() => import('@/pages/mainTabs/Languages/CFamily/CPlusPlus/Advanced/ConcurrencyAndErrorHandling/ExceptionHandling'));

const ConcurrencyAndErrorHandling: RouteObject[] = [
  {
    path: '/cplusplus/advanced/concurrency/multithreading',
    element: <Multithreading />,
  },
  {
    path: '/cplusplus/advanced/concurrency/exceptions',
    element: <ExceptionHandling />,
  },
];

export default ConcurrencyAndErrorHandling;
