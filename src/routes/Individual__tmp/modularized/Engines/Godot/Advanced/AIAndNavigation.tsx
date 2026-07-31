import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const NavigationMeshes = lazy(() => import('@/Pages/MainTabs/Engines/Godot/Advanced/AIAndNavigation/NavigationMeshes'));
const Pathfinding = lazy(() => import('@/Pages/MainTabs/Engines/Godot/Advanced/AIAndNavigation/Pathfinding'));

const AIAndNavigation: RouteObject[] = [
  {
    path: '/godot/advanced/ai-and-navigation/navigation-meshes',
    element: <NavigationMeshes />,
  },
  {
    path: '/godot/advanced/ai-and-navigation/pathfinding',
    element: <Pathfinding />,
  },
];

export default AIAndNavigation;
