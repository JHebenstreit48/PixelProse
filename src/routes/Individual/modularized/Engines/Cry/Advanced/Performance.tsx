import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const ConsoleAndCVars = lazy(() => import('@/Pages/MainTabs/Engines/Cry/Advanced/Performance/ConsoleAndCVars'));
const ProfilingAndOptimization = lazy(() => import('@/Pages/MainTabs/Engines/Cry/Advanced/Performance/ProfilingAndOptimization'));

const Performance: RouteObject[] = [
  {
    path: '/cry/advanced/performance/console-and-cvars',
    element: <ConsoleAndCVars />,
  },
  {
    path: '/cry/advanced/performance/profiling-and-optimization',
    element: <ProfilingAndOptimization />,
  },
];

export default Performance;
