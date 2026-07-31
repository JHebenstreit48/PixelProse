import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const JITAndHiddenClasses = lazy(() => import('@/Pages/MainTabs/Languages/JavaScript/Basics/PerformanceBasics/JITAndHiddenClasses'));
const AllocationsAndGC = lazy(() => import('@/Pages/MainTabs/Languages/JavaScript/Basics/PerformanceBasics/AllocationsAndGC'));

const PerformanceBasics: RouteObject[] = [
  {
    path: '/javascript/game-dev/basics/performance-basics/jit-and-hidden-classes',
    element: <JITAndHiddenClasses />,
  },
  {
    path: '/javascript/game-dev/basics/performance-basics/allocations-and-gc',
    element: <AllocationsAndGC />,
  },
];

export default PerformanceBasics;
