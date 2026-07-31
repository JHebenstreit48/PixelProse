import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const EntityId = lazy(() => import('@/Pages/MainTabs/Languages/TypeScript/Basics/Types/ECS/EntityId'));
const ComponentsAndSystems = lazy(() => import('@/Pages/MainTabs/Languages/TypeScript/Basics/Types/ECS/ComponentsAndSystems'));

const ECS: RouteObject[] = [
  {
    path: '/typescript/game-dev/basics/types/ecs/entityid-branded',
    element: <EntityId />,
  },
  {
    path: '/typescript/game-dev/basics/types/ecs/components-and-systems',
    element: <ComponentsAndSystems />,
  },
];

export default ECS;
