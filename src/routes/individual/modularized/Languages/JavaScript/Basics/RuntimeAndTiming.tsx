import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const GameLoopAndDelta = lazy(() => import('@/Pages/MainTabs/Languages/JavaScript/Basics/RuntimeAndTiming/GameLoopAndDelta'));
const FrameBudgetAndTicks = lazy(() => import('@/Pages/MainTabs/Languages/JavaScript/Basics/RuntimeAndTiming/FrameBudgetAndTicks'));

const RuntimeAndTiming: RouteObject[] = [
  {
    path: '/javascript/game-dev/basics/runtime-and-timing/game-loop-and-delta',
    element: <GameLoopAndDelta />,
  },
  {
    path: '/javascript/game-dev/basics/runtime-and-timing/frame-budget-and-ticks',
    element: <FrameBudgetAndTicks />,
  },
];

export default RuntimeAndTiming;
