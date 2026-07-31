import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const ZeroCostAbstractions = lazy(() => import('@/Pages/MainTabs/Languages/Rust/Advanced/Performance/ZeroCostAbstractions'));
const ProfilingAndBenchmarks = lazy(() => import('@/Pages/MainTabs/Languages/Rust/Advanced/Performance/ProfilingAndBenchmarks'));

const Performance: RouteObject[] = [
  {
    path: '/rust/advanced/performance/zero-cost-abstractions',
    element: <ZeroCostAbstractions />,
  },
  {
    path: '/rust/advanced/performance/profiling-and-benchmarks',
    element: <ProfilingAndBenchmarks />,
  },
];

export default Performance;
