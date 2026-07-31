import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const InlineAndValueClasses = lazy(() => import('@/pages/mainTabs/Languages/Kotlin/Advanced/Performance/InlineAndValueClasses'));
const AllocationAndProfiling = lazy(() => import('@/pages/mainTabs/Languages/Kotlin/Advanced/Performance/AllocationAndProfiling'));

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
