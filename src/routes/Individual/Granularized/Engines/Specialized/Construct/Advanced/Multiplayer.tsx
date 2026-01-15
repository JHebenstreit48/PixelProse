import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const MultiplayerBasics = lazy(() => import('@/Pages/MainTabs/Engines/Specialized/Construct/Advanced/Multiplayer/MultiplayerBasics'));
const SyncAndLagComp = lazy(() => import('@/Pages/MainTabs/Engines/Specialized/Construct/Advanced/Multiplayer/SyncAndLagComp'));

const Multiplayer: RouteObject[] = [
  {
    path: '/construct/advanced/multiplayer/multiplayer-basics',
    element: <MultiplayerBasics />,
  },
  {
    path: '/construct/advanced/multiplayer/sync-and-lag-comp',
    element: <SyncAndLagComp />,
  },
];

export default Multiplayer;
