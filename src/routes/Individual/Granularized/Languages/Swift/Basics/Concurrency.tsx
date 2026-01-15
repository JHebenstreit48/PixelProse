import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const AsyncAwait = lazy(() => import('@/Pages/MainTabs/Languages/Swift/Basics/Concurrency/AsyncAwait'));
const Actors = lazy(() => import('@/Pages/MainTabs/Languages/Swift/Basics/Concurrency/Actors'));

const Concurrency: RouteObject[] = [
  {
    path: '/swift/basics/concurrency-basics/async-and-await',
    element: <AsyncAwait />,
  },
  {
    path: '/swift/basics/concurrency-basics/actors-intro',
    element: <Actors />,
  },
];

export default Concurrency;
