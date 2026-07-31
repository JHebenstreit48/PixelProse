import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Lifetimes = lazy(() => import('@/Pages/MainTabs/Languages/Rust/Basics/LifetimesAndErrors/Lifetimes'));
const ResultAndErrorHandling = lazy(() => import('@/Pages/MainTabs/Languages/Rust/Basics/LifetimesAndErrors/ResultAndErrorHandling'));

const LifetimesAndErrors: RouteObject[] = [
  {
    path: '/rust/basics/lifetimes-and-errors/lifetimes-intro',
    element: <Lifetimes />,
  },
  {
    path: '/rust/basics/lifetimes-and-errors/result-and-error-handling',
    element: <ResultAndErrorHandling />,
  },
];

export default LifetimesAndErrors;
