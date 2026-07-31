import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const ECSWithTables = lazy(() => import('@/Pages/MainTabs/Languages/Lua/Advanced/GameScripting/ECSWithTables'));
const TimeAndGameLoop = lazy(() => import('@/Pages/MainTabs/Languages/Lua/Advanced/GameScripting/TimeAndGameLoop'));

const GameScripting: RouteObject[] = [
  {
    path: '/lua/advanced/game-scripting/ecs-with-tables',
    element: <ECSWithTables />,
  },
  {
    path: '/lua/advanced/game-scripting/time-and-game-loop',
    element: <TimeAndGameLoop />,
  },
];

export default GameScripting;
