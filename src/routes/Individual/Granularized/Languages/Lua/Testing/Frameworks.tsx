import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Busted = lazy(() => import('@/Pages/MainTabs/Languages/Lua/Testing/Frameworks/Busted'));
const LuaUnit = lazy(() => import('@/Pages/MainTabs/Languages/Lua/Testing/Frameworks/LuaUnit'));
const Lunatest = lazy(() => import('@/Pages/MainTabs/Languages/Lua/Testing/Frameworks/Lunatest'));
const Testa = lazy(() => import('@/Pages/MainTabs/Languages/Lua/Testing/Frameworks/Testa'));

const Frameworks: RouteObject[] = [
  {
    path: '/lua/testing/frameworks/busted',
    element: <Busted />,
  },
  {
    path: '/lua/testing/frameworks/luaunit',
    element: <LuaUnit />,
  },
  {
    path: '/lua/testing/frameworks/lunatest',
    element: <Lunatest />,
  },
  {
    path: '/lua/testing/frameworks/testa',
    element: <Testa />,
  },
];

export default Frameworks;
