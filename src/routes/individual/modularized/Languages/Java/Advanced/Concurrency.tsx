import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const LocksAndSynchronizers = lazy(() => import('@/pages/mainTabs/Languages/Java/Advanced/Concurrency/LocksAndSynchronizers'));
const ParallelStreamsAndForkJoin = lazy(() => import('@/pages/mainTabs/Languages/Java/Advanced/Concurrency/ParallelStreamsAndForkJoin'));

const Concurrency: RouteObject[] = [
  {
    path: '/java/advanced/concurrency/locks-and-synchronizers',
    element: <LocksAndSynchronizers />,
  },
  {
    path: '/java/advanced/concurrency/parallel-streams-and-forkjoin',
    element: <ParallelStreamsAndForkJoin />,
  },
];

export default Concurrency;
