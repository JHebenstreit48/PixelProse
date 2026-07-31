import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Optimizations = lazy(() => import('@/Pages/MainTabs/Languages/Lua/Advanced/Performance/Optimizations'));
const ProfilingStrategies = lazy(() => import('@/Pages/MainTabs/Languages/Lua/Advanced/Performance/ProfilingStrategies'));

const Performance: RouteObject[] = [
  {
    path: '/lua/advanced/performance/optimizations',
    element: <Optimizations />,
  },
  {
    path: '/lua/advanced/performance/profiling-strategies',
    element: <ProfilingStrategies />,
  },
];

export default Performance;
