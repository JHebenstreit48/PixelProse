import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const GameDevelopmentBestPractices = lazy(() => import('@/pages/mainTabs/Languages/CFamily/CSharp/Advanced/GameOrientedConcepts/GameDevelopmentBestPractices'));
const GarbageCollectionInGames = lazy(() => import('@/pages/mainTabs/Languages/CFamily/CSharp/Advanced/GameOrientedConcepts/GarbageCollectionInGames'));

const GameOrientedConcepts: RouteObject[] = [
  {
    path: '/languages/c-family/c-sharp/advanced/gamedev-practices',
    element: <GameDevelopmentBestPractices />,
  },
  {
    path: '/languages/c-family/c-sharp/advanced/garbage-collection',
    element: <GarbageCollectionInGames />,
  },
];

export default GameOrientedConcepts;
