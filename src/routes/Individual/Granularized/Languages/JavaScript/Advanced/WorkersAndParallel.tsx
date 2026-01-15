import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const WebWorkersAndMessaging = lazy(() => import('@/Pages/MainTabs/Languages/JavaScript/Advanced/WorkersAndParallel/WebWorkersAndMessaging'));
const SharedArrayBufferAndAtomics = lazy(() => import('@/Pages/MainTabs/Languages/JavaScript/Advanced/WorkersAndParallel/SharedArrayBufferAndAtomics'));

const WorkersAndParallel: RouteObject[] = [
  {
    path: '/javascript/game-dev/advanced/workers-and-parallel/web-workers-and-messaging',
    element: <WebWorkersAndMessaging />,
  },
  {
    path: '/javascript/game-dev/advanced/workers-and-parallel/sharedarraybuffer-and-atomics',
    element: <SharedArrayBufferAndAtomics />,
  },
];

export default WorkersAndParallel;
