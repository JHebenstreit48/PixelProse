import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const TerrainAndVegetation = lazy(() => import('@/Pages/MainTabs/Engines/Cry/Advanced/WorldAndEnvironment/TerrainAndVegetation'));
const WorldStreaming = lazy(() => import('@/Pages/MainTabs/Engines/Cry/Advanced/WorldAndEnvironment/WorldStreaming'));

const WorldAndEnvironment: RouteObject[] = [
  {
    path: '/cry/advanced/world-and-environment/terrain-and-vegetation',
    element: <TerrainAndVegetation />,
  },
  {
    path: '/cry/advanced/world-and-environment/world-streaming',
    element: <WorldStreaming />,
  },
];

export default WorldAndEnvironment;
