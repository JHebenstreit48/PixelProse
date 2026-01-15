import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const ARCOptimization = lazy(() => import('@/Pages/MainTabs/Languages/Swift/Advanced/Performance/ARCOptimization'));
const CopyOnWrite = lazy(() => import('@/Pages/MainTabs/Languages/Swift/Advanced/Performance/CopyOnWrite'));

const Performance: RouteObject[] = [
  {
    path: '/swift/advanced/performance/arc-optimization',
    element: <ARCOptimization />,
  },
  {
    path: '/swift/advanced/performance/copy-on-write',
    element: <CopyOnWrite />,
  },
];

export default Performance;
