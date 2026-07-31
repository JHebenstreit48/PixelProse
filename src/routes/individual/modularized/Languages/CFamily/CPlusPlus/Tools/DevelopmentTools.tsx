import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const DebuggingTools = lazy(() => import('@/Pages/MainTabs/Languages/CFamily/CPlusPlus/Tools/DevelopmentTools/DebuggingTools'));
const PerformanceProfilingTools = lazy(() => import('@/Pages/MainTabs/Languages/CFamily/CPlusPlus/Tools/DevelopmentTools/PerformanceProfilingTools'));

const DevelopmentTools: RouteObject[] = [
  {
    path: '/cplusplus/tools/dev/debugging',
    element: <DebuggingTools />,
  },
  {
    path: '/cplusplus/tools/dev/performance-profiling',
    element: <PerformanceProfilingTools />,
  },
];

export default DevelopmentTools;
