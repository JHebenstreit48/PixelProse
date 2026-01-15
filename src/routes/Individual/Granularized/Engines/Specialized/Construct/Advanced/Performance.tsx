import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const ObjectCountAndDrawCalls = lazy(() => import('@/Pages/MainTabs/Engines/Specialized/Construct/Advanced/Performance/ObjectCountAndDrawCalls'));
const ProfilerAndDebugger = lazy(() => import('@/Pages/MainTabs/Engines/Specialized/Construct/Advanced/Performance/ProfilerAndDebugger'));

const Performance: RouteObject[] = [
  {
    path: '/construct/advanced/performance/object-count-and-draw-calls',
    element: <ObjectCountAndDrawCalls />,
  },
  {
    path: '/construct/advanced/performance/profiler-and-debugger',
    element: <ProfilerAndDebugger />,
  },
];

export default Performance;
