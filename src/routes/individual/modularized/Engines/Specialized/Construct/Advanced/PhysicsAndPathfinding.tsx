import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const PhysicsAndCollisions = lazy(() => import('@/Pages/MainTabs/Engines/Specialized/Construct/Advanced/PhysicsAndPathfinding/PhysicsAndCollisions'));
const PathfindingAndNavigation = lazy(() => import('@/Pages/MainTabs/Engines/Specialized/Construct/Advanced/PhysicsAndPathfinding/PathfindingAndNavigation'));

const PhysicsAndPathfinding: RouteObject[] = [
  {
    path: '/construct/advanced/physics-and-pathfinding/physics-and-collisions',
    element: <PhysicsAndCollisions />,
  },
  {
    path: '/construct/advanced/physics-and-pathfinding/pathfinding-and-navigation',
    element: <PathfindingAndNavigation />,
  },
];

export default PhysicsAndPathfinding;
