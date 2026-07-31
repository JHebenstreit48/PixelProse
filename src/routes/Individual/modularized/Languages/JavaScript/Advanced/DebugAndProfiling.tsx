import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const PerfTimelineAndFlamegraphs = lazy(() => import('@/Pages/MainTabs/Languages/JavaScript/Advanced/DebugAndProfiling/PerfTimelineAndFlamegraphs'));
const GCAndMemoryTools = lazy(() => import('@/Pages/MainTabs/Languages/JavaScript/Advanced/DebugAndProfiling/GCAndMemoryTools'));

const DebugAndProfiling: RouteObject[] = [
  {
    path: '/javascript/game-dev/advanced/debug-and-profiling/perf-timeline-and-flamegraphs',
    element: <PerfTimelineAndFlamegraphs />,
  },
  {
    path: '/javascript/game-dev/advanced/debug-and-profiling/gc-and-memory-tools',
    element: <GCAndMemoryTools />,
  },
];

export default DebugAndProfiling;
