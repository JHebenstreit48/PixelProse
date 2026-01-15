import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const NoCostAbstractions = lazy(() => import('@/Pages/MainTabs/Languages/TypeScript/Basics/Types/Performance/NoCostAbstractions'));
const InlineDataAndStructs = lazy(() => import('@/Pages/MainTabs/Languages/TypeScript/Basics/Types/Performance/InlineDataAndStructs'));

const Performance: RouteObject[] = [
  {
    path: '/typescript/game-dev/basics/types/performance/no-cost-abstractions',
    element: <NoCostAbstractions />,
  },
  {
    path: '/typescript/game-dev/basics/types/performance/inline-data-and-structs',
    element: <InlineDataAndStructs />,
  },
];

export default Performance;
