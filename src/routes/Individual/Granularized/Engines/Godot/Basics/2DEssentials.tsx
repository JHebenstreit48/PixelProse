import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const TilemapsAndSprites = lazy(() => import('@/Pages/MainTabs/Engines/Godot/Basics/2DEssentials/TilemapsAndSprites'));
const InputAndCamera2D = lazy(() => import('@/Pages/MainTabs/Engines/Godot/Basics/2DEssentials/InputAndCamera2D'));

const 2DEssentials: RouteObject[] = [
  {
    path: '/godot/basics/2d-essentials/tilemaps-and-sprites',
    element: <TilemapsAndSprites />,
  },
  {
    path: '/godot/basics/2d-essentials/input-and-camera2d',
    element: <InputAndCamera2D />,
  },
];

export default 2DEssentials;
