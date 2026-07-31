import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const InlineAndValueClasses = lazy(() => import('@/Pages/MainTabs/Languages/Kotlin/Advanced/Performance/InlineAndValueClasses'));
const AllocationAndProfiling = lazy(() => import('@/Pages/MainTabs/Languages/Kotlin/Advanced/Performance/AllocationAndProfiling'));

const Performance: RouteObject[] = [
  {
    path: '/kotlin/advanced/performance/inline-and-value-classes',
    element: <InlineAndValueClasses />,
  },
  {
    path: '/kotlin/advanced/performance/allocation-and-profiling',
    element: <AllocationAndProfiling />,
  },
];

export default Performance;
