import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const SoftBodies = lazy(() => import('@/Pages/MainTabs/Engines/Cry/Advanced/Physics/SoftBodies'));
const VehiclesAndDestruction = lazy(() => import('@/Pages/MainTabs/Engines/Cry/Advanced/Physics/VehiclesAndDestruction'));

const Physics: RouteObject[] = [
  {
    path: '/cry/advanced/physics/soft-bodies',
    element: <SoftBodies />,
  },
  {
    path: '/cry/advanced/physics/vehicles-and-destruction',
    element: <VehiclesAndDestruction />,
  },
];

export default Physics;
