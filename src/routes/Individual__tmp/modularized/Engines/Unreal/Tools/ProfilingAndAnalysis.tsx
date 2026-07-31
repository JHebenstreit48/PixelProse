import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const UnrealInsights = lazy(() => import('@/Pages/MainTabs/Engines/Unreal/Tools/ProfilingAndAnalysis/UnrealInsights'));
const GPUCPUProfilers = lazy(() => import('@/Pages/MainTabs/Engines/Unreal/Tools/ProfilingAndAnalysis/GPUCPUProfilers'));

const ProfilingAndAnalysis: RouteObject[] = [
  {
    path: '/unreal/tools/profiling-and-analysis/unreal-insights',
    element: <UnrealInsights />,
  },
  {
    path: '/unreal/tools/profiling-and-analysis/gpu-cpu-profilers',
    element: <GPUCPUProfilers />,
  },
];

export default ProfilingAndAnalysis;
