import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const NavMesh = lazy(() => import('@/Pages/MainTabs/Engines/Unity/Advanced/AIAndNavigation/NavMesh'));
const BehaviorTrees = lazy(() => import('@/Pages/MainTabs/Engines/Unity/Advanced/AIAndNavigation/BehaviorTrees'));

const AIAndNavigation: RouteObject[] = [
  {
    path: '/unity/advanced/ai-and-navigation/navmesh',
    element: <NavMesh />,
  },
  {
    path: '/unity/advanced/ai-and-navigation/behavior-trees',
    element: <BehaviorTrees />,
  },
];

export default AIAndNavigation;
