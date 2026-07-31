import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const ProfilerBasics = lazy(() => import('@/pages/mainTabs/Engines/Unity/Tools/ProfilerAndAnalysis/ProfilerBasics'));
const MemoryProfiler = lazy(() => import('@/pages/mainTabs/Engines/Unity/Tools/ProfilerAndAnalysis/MemoryProfiler'));

const ProfilerAndAnalysis: RouteObject[] = [
  {
    path: '/unity/tools/profiler-and-analysis/profiler-basics',
    element: <ProfilerBasics />,
  },
  {
    path: '/unity/tools/profiler-and-analysis/memory-profiler',
    element: <MemoryProfiler />,
  },
];

export default ProfilerAndAnalysis;
