import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const NavMeshSystem = lazy(() => import('@/Pages/MainTabs/Engines/Unreal/Advanced/Navigation/NavMeshSystem'));
const Pathfinding = lazy(() => import('@/Pages/MainTabs/Engines/Unreal/Advanced/Navigation/Pathfinding'));

const Navigation: RouteObject[] = [
  {
    path: '/unreal/advanced/navigation/navmesh-system',
    element: <NavMeshSystem />,
  },
  {
    path: '/unreal/advanced/navigation/pathfinding',
    element: <Pathfinding />,
  },
];

export default Navigation;
