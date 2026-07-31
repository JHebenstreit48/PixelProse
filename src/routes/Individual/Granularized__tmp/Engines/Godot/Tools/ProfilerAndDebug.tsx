import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const MonitorsAndProfiler = lazy(() => import('@/Pages/MainTabs/Engines/Godot/Tools/ProfilerAndDebug/MonitorsAndProfiler'));
const DebuggerAndBreakpoints = lazy(() => import('@/Pages/MainTabs/Engines/Godot/Tools/ProfilerAndDebug/DebuggerAndBreakpoints'));

const ProfilerAndDebug: RouteObject[] = [
  {
    path: '/godot/tools/profiler-and-debug/monitors-and-profiler',
    element: <MonitorsAndProfiler />,
  },
  {
    path: '/godot/tools/profiler-and-debug/debugger-and-breakpoints',
    element: <DebuggerAndBreakpoints />,
  },
];

export default ProfilerAndDebug;
