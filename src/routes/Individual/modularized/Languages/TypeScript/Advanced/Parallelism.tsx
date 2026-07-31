import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const SharedArrayBufferAndAtomics = lazy(() => import('@/Pages/MainTabs/Languages/TypeScript/Advanced/Parallelism/SharedArrayBufferAndAtomics'));
const TransferablesAndClone = lazy(() => import('@/Pages/MainTabs/Languages/TypeScript/Advanced/Parallelism/TransferablesAndClone'));

const Parallelism: RouteObject[] = [
  {
    path: '/typescript/game-dev/advanced/parallelism/sharedarraybuffer-and-atomics',
    element: <SharedArrayBufferAndAtomics />,
  },
  {
    path: '/typescript/game-dev/advanced/parallelism/transferables-and-clone',
    element: <TransferablesAndClone />,
  },
];

export default Parallelism;
