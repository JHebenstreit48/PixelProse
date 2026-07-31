import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Introduction = lazy(() => import('@/Pages/MainTabs/Languages/TypeScript/Basics/Fundamentals/Introduction'));
const Tsconfig = lazy(() => import('@/Pages/MainTabs/Languages/TypeScript/Basics/Fundamentals/Tsconfig'));

const Fundamentals: RouteObject[] = [
  {
    path: '/typescript/game-dev/basics/fundamentals/introduction',
    element: <Introduction />,
  },
  {
    path: '/typescript/game-dev/basics/fundamentals/tsconfig-games',
    element: <Tsconfig />,
  },
];

export default Fundamentals;
