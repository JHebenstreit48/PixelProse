import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const RigidBodies = lazy(() => import('@/pages/mainTabs/Engines/Cry/Basics/PhysicsBasics/RigidBodies'));
const CollidersAndConstraints = lazy(() => import('@/pages/mainTabs/Engines/Cry/Basics/PhysicsBasics/CollidersAndConstraints'));

const PhysicsBasics: RouteObject[] = [
  {
    path: '/cry/basics/physics-basics/rigid-bodies',
    element: <RigidBodies />,
  },
  {
    path: '/cry/basics/physics-basics/colliders-and-constraints',
    element: <CollidersAndConstraints />,
  },
];

export default PhysicsBasics;
