import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const GameCenterAndICloud = lazy(() => import('@/Pages/MainTabs/Mobile/Platforms/Advanced/PlatformServices/GameCenterAndICloud'));
const GooglePlayGamesAndServices = lazy(() => import('@/Pages/MainTabs/Mobile/Platforms/Advanced/PlatformServices/GooglePlayGamesAndServices'));

const PlatformServices: RouteObject[] = [
  {
    path: '/mobile/platforms/advanced/platform-services/game-center-icloud',
    element: <GameCenterAndICloud />,
  },
  {
    path: '/mobile/platforms/advanced/platform-services/play-games-services',
    element: <GooglePlayGamesAndServices />,
  },
];

export default PlatformServices;
