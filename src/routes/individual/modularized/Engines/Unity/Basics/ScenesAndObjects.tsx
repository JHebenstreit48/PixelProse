import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const GameObjectsAndComponents = lazy(() => import('@/pages/mainTabs/Engines/Unity/Basics/ScenesAndObjects/GameObjectsAndComponents'));
const SceneManagement = lazy(() => import('@/pages/mainTabs/Engines/Unity/Basics/ScenesAndObjects/SceneManagement'));

const ScenesAndObjects: RouteObject[] = [
  {
    path: '/unity/basics/scenes-and-objects/gameobjects-and-components',
    element: <GameObjectsAndComponents />,
  },
  {
    path: '/unity/basics/scenes-and-objects/scene-management',
    element: <SceneManagement />,
  },
];

export default ScenesAndObjects;
