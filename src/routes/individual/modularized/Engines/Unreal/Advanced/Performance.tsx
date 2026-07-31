import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const UnrealInsights = lazy(() => import('@/Pages/MainTabs/Engines/Unreal/Advanced/Performance/UnrealInsights'));
const StatCommandsAndProfilers = lazy(() => import('@/Pages/MainTabs/Engines/Unreal/Advanced/Performance/StatCommandsAndProfilers'));

const Performance: RouteObject[] = [
  {
    path: '/unreal/advanced/performance/unreal-insights',
    element: <UnrealInsights />,
  },
  {
    path: '/unreal/advanced/performance/stat-commands-and-profilers',
    element: <StatCommandsAndProfilers />,
  },
];

export default Performance;
