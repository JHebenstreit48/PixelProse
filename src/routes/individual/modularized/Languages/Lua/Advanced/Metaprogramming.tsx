import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Metatables = lazy(() => import('@/pages/mainTabs/Languages/Lua/Advanced/Metaprogramming/Metatables'));
const Metamethods = lazy(() => import('@/pages/mainTabs/Languages/Lua/Advanced/Metaprogramming/Metamethods'));

const Metaprogramming: RouteObject[] = [
  {
    path: '/lua/advanced/metaprogramming/metatables',
    element: <Metatables />,
  },
  {
    path: '/lua/advanced/metaprogramming/metamethods',
    element: <Metamethods />,
  },
];

export default Metaprogramming;
