import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const CharacterControllers = lazy(() => import('@/Pages/MainTabs/Engines/Unity/Advanced/Physics/CharacterControllers'));
const Raycasting = lazy(() => import('@/Pages/MainTabs/Engines/Unity/Advanced/Physics/Raycasting'));

const Physics: RouteObject[] = [
  {
    path: '/unity/advanced/physics/character-controllers',
    element: <CharacterControllers />,
  },
  {
    path: '/unity/advanced/physics/raycasting',
    element: <Raycasting />,
  },
];

export default Physics;
