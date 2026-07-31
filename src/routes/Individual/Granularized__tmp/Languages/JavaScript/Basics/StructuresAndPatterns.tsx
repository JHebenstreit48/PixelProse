import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const ECSFriendlyData = lazy(() => import('@/Pages/MainTabs/Languages/JavaScript/Basics/StructuresAndPatterns/ECSFriendlyData'));
const ObjectPools = lazy(() => import('@/Pages/MainTabs/Languages/JavaScript/Basics/StructuresAndPatterns/ObjectPools'));

const StructuresAndPatterns: RouteObject[] = [
  {
    path: '/javascript/game-dev/basics/structures-and-patterns/ecs-friendly-data',
    element: <ECSFriendlyData />,
  },
  {
    path: '/javascript/game-dev/basics/structures-and-patterns/object-pools',
    element: <ObjectPools />,
  },
];

export default StructuresAndPatterns;
