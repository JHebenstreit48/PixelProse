import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const GameDevelopmentBestPractices = lazy(() => import('@/Pages/MainTabs/Languages/CFamily/CSharp/Advanced/GameOrientedConcepts/GameDevelopmentBestPractices'));
const GarbageCollectionInGames = lazy(() => import('@/Pages/MainTabs/Languages/CFamily/CSharp/Advanced/GameOrientedConcepts/GarbageCollectionInGames'));

const GameOrientedConcepts: RouteObject[] = [
  {
    path: '/cfamily/csharp/advanced/gamedev-practices',
    element: <GameDevelopmentBestPractices />,
  },
  {
    path: '/cfamily/csharp/advanced/garbage-collection',
    element: <GarbageCollectionInGames />,
  },
];

export default GameOrientedConcepts;
