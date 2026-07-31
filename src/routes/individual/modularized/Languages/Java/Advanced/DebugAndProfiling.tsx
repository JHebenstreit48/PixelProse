import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const JFRAndAsyncProfiler = lazy(() => import('@/pages/mainTabs/Languages/Java/Advanced/DebugAndProfiling/JFRAndAsyncProfiler'));
const FlamegraphsAndSampling = lazy(() => import('@/pages/mainTabs/Languages/Java/Advanced/DebugAndProfiling/FlamegraphsAndSampling'));

const DebugAndProfiling: RouteObject[] = [
  {
    path: '/java/advanced/debug-and-profiling/jfr-and-async-profiler',
    element: <JFRAndAsyncProfiler />,
  },
  {
    path: '/java/advanced/debug-and-profiling/flamegraphs-and-sampling',
    element: <FlamegraphsAndSampling />,
  },
];

export default DebugAndProfiling;
