import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const JITAndEscapeAnalysis = lazy(() => import('@/Pages/MainTabs/Languages/Java/Advanced/Performance/JITAndEscapeAnalysis'));
const ObjectPoolsAndStructs = lazy(() => import('@/Pages/MainTabs/Languages/Java/Advanced/Performance/ObjectPoolsAndStructs'));

const Performance: RouteObject[] = [
  {
    path: '/java/advanced/performance/jit-and-escape-analysis',
    element: <JITAndEscapeAnalysis />,
  },
  {
    path: '/java/advanced/performance/object-pools-and-structs',
    element: <ObjectPoolsAndStructs />,
  },
];

export default Performance;
