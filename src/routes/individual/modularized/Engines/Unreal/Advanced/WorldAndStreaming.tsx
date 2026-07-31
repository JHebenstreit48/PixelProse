import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const LevelStreaming = lazy(() => import('@/Pages/MainTabs/Engines/Unreal/Advanced/WorldAndStreaming/LevelStreaming'));
const WorldPartition = lazy(() => import('@/Pages/MainTabs/Engines/Unreal/Advanced/WorldAndStreaming/WorldPartition'));

const WorldAndStreaming: RouteObject[] = [
  {
    path: '/unreal/advanced/world-and-streaming/level-streaming',
    element: <LevelStreaming />,
  },
  {
    path: '/unreal/advanced/world-and-streaming/world-partition',
    element: <WorldPartition />,
  },
];

export default WorldAndStreaming;
