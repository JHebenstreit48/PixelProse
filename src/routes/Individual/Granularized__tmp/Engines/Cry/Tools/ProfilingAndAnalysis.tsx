import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const ProfilerAndStats = lazy(() => import('@/Pages/MainTabs/Engines/Cry/Tools/ProfilingAndAnalysis/ProfilerAndStats'));
const FrameCaptures = lazy(() => import('@/Pages/MainTabs/Engines/Cry/Tools/ProfilingAndAnalysis/FrameCaptures'));

const ProfilingAndAnalysis: RouteObject[] = [
  {
    path: '/cry/tools/profiling-and-analysis/profiler-and-stats',
    element: <ProfilerAndStats />,
  },
  {
    path: '/cry/tools/profiling-and-analysis/frame-captures',
    element: <FrameCaptures />,
  },
];

export default ProfilingAndAnalysis;
