import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const 2DAnd3DBodies = lazy(() => import('@/Pages/MainTabs/Engines/Godot/Advanced/Physics/2DAnd3DBodies'));
const AreasAndLayers = lazy(() => import('@/Pages/MainTabs/Engines/Godot/Advanced/Physics/AreasAndLayers'));

const Physics: RouteObject[] = [
  {
    path: '/godot/advanced/physics/2d-and-3d-bodies',
    element: <2DAnd3DBodies />,
  },
  {
    path: '/godot/advanced/physics/areas-and-layers',
    element: <AreasAndLayers />,
  },
];

export default Physics;
