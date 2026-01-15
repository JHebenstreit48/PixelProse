import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Coroutines = lazy(() => import('@/Pages/MainTabs/Languages/Lua/Advanced/Coroutines/Coroutines'));
const CoroutinePatterns = lazy(() => import('@/Pages/MainTabs/Languages/Lua/Advanced/Coroutines/CoroutinePatterns'));

const Coroutines: RouteObject[] = [
  {
    path: '/lua/advanced/coroutines/coroutines',
    element: <Coroutines />,
  },
  {
    path: '/lua/advanced/coroutines/coroutine-patterns',
    element: <CoroutinePatterns />,
  },
];

export default Coroutines;
