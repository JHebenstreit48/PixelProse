import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const EntitiesAndComponents = lazy(() => import('@/Pages/MainTabs/Engines/Cry/Basics/EntitiesAndComponents/EntitiesAndComponents'));
const EntityEvents = lazy(() => import('@/Pages/MainTabs/Engines/Cry/Basics/EntitiesAndComponents/EntityEvents'));

const EntitiesAndComponents: RouteObject[] = [
  {
    path: '/cry/basics/entities-and-components/entities-and-components',
    element: <EntitiesAndComponents />,
  },
  {
    path: '/cry/basics/entities-and-components/entity-events',
    element: <EntityEvents />,
  },
];

export default EntitiesAndComponents;
