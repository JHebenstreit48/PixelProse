import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Coroutine = lazy(() => import('@/pages/mainTabs/Languages/Lua/Advanced/Coroutines/Coroutines'));
const CoroutinePatterns = lazy(() => import('@/pages/mainTabs/Languages/Lua/Advanced/Coroutines/CoroutinePatterns'));

const Coroutines: RouteObject[] = [
  {
    path: '/lua/advanced/coroutines/coroutines',
    element: <Coroutine />,
  },
  {
    path: '/lua/advanced/coroutines/coroutine-patterns',
    element: <CoroutinePatterns />,
  },
];

export default Coroutines;
