import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const SuspendAndLaunch = lazy(() => import('@/Pages/MainTabs/Languages/Kotlin/Basics/Coroutines/SuspendAndLaunch'));
const Flows = lazy(() => import('@/Pages/MainTabs/Languages/Kotlin/Basics/Coroutines/Flows'));

const Coroutines: RouteObject[] = [
  {
    path: '/kotlin/basics/coroutines-basics/suspend-and-launch',
    element: <SuspendAndLaunch />,
  },
  {
    path: '/kotlin/basics/coroutines-basics/flows-intro',
    element: <Flows />,
  },
];

export default Coroutines;
