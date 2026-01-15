import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const DebuggingTools = lazy(() => import('@/Pages/MainTabs/Languages/Lua/Tools/DevTools/DebuggingTools'));
const Profiler = lazy(() => import('@/Pages/MainTabs/Languages/Lua/Tools/DevTools/Profiler'));
const LuaJIT = lazy(() => import('@/Pages/MainTabs/Languages/Lua/Tools/DevTools/LuaJIT'));
const ZeroBraneStudio = lazy(() => import('@/Pages/MainTabs/Languages/Lua/Tools/DevTools/ZeroBraneStudio'));

const DevTools: RouteObject[] = [
  {
    path: '/lua/tools/dev-tools/debugging-tools',
    element: <DebuggingTools />,
  },
  {
    path: '/lua/tools/dev-tools/profiler',
    element: <Profiler />,
  },
  {
    path: '/lua/tools/dev-tools/luajit',
    element: <LuaJIT />,
  },
  {
    path: '/lua/tools/dev-tools/zerobrane-studio',
    element: <ZeroBraneStudio />,
  },
];

export default DevTools;
