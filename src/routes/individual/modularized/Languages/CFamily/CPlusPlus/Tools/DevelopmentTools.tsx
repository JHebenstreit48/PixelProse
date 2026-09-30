import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const DebuggingTools = lazy(() => import('@/pages/mainTabs/Languages/CFamily/CPlusPlus/Tools/DevelopmentTools/DebuggingTools'));
const PerformanceProfilingTools = lazy(() => import('@/pages/mainTabs/Languages/CFamily/CPlusPlus/Tools/DevelopmentTools/PerformanceProfilingTools'));

const DevelopmentTools: RouteObject[] = [
  {
    path: '/languages/c-family/c-plus-plus/tools/dev/debugging',
    element: <DebuggingTools />,
  },
  {
    path: '/languages/c-family/c-plus-plus/tools/dev/performance-profiling',
    element: <PerformanceProfilingTools />,
  },
];

export default DevelopmentTools;
