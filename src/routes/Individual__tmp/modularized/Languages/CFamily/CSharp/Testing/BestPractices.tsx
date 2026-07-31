import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const GameTestingBestPractices = lazy(() => import('@/Pages/MainTabs/Languages/CFamily/CSharp/Testing/BestPractices/GameTestingBestPractices'));
const PerformanceTestingForGames = lazy(() => import('@/Pages/MainTabs/Languages/CFamily/CSharp/Testing/BestPractices/PerformanceTestingForGames'));

const BestPractices: RouteObject[] = [
  {
    path: '/cfamily/csharp/testing/bestpractices/gamedev',
    element: <GameTestingBestPractices />,
  },
  {
    path: '/cfamily/csharp/testing/bestpractices/performance',
    element: <PerformanceTestingForGames />,
  },
];

export default BestPractices;
