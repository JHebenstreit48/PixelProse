import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const DebuggingTools = lazy(() => import('@/pages/mainTabs/Languages/Lua/Tools/DevTools/DebuggingTools'));
const Profiler = lazy(() => import('@/pages/mainTabs/Languages/Lua/Tools/DevTools/Profiler'));
const LuaJIT = lazy(() => import('@/pages/mainTabs/Languages/Lua/Tools/DevTools/LuaJIT'));
const ZeroBraneStudio = lazy(() => import('@/pages/mainTabs/Languages/Lua/Tools/DevTools/ZeroBraneStudio'));

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
