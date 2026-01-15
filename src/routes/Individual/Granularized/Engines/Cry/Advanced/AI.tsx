import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const BehaviorTrees = lazy(() => import('@/Pages/MainTabs/Engines/Cry/Advanced/AI/BehaviorTrees'));
const NavigationMeshes = lazy(() => import('@/Pages/MainTabs/Engines/Cry/Advanced/AI/NavigationMeshes'));

const AI: RouteObject[] = [
  {
    path: '/cry/advanced/ai/behavior-trees',
    element: <BehaviorTrees />,
  },
  {
    path: '/cry/advanced/ai/navigation-meshes',
    element: <NavigationMeshes />,
  },
];

export default AI;
