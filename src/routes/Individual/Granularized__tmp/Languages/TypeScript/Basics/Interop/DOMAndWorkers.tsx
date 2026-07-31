import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const DOMAndWorkersTypes = lazy(() => import('@/Pages/MainTabs/Languages/TypeScript/Basics/Interop/DOMAndWorkers/DOMAndWorkersTypes'));
const WorkerMessageTypes = lazy(() => import('@/Pages/MainTabs/Languages/TypeScript/Basics/Interop/DOMAndWorkers/WorkerMessageTypes'));

const DOMAndWorkers: RouteObject[] = [
  {
    path: '/typescript/game-dev/basics/interop/dom-and-workers/dom-and-workers-types',
    element: <DOMAndWorkersTypes />,
  },
  {
    path: '/typescript/game-dev/basics/interop/dom-and-workers/worker-message-types',
    element: <WorkerMessageTypes />,
  },
];

export default DOMAndWorkers;
