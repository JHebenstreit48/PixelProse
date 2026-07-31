import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const MultiplayerAPI = lazy(() => import('@/Pages/MainTabs/Engines/Godot/Advanced/Networking/MultiplayerAPI'));
const RPCAndSync = lazy(() => import('@/Pages/MainTabs/Engines/Godot/Advanced/Networking/RPCAndSync'));

const Networking: RouteObject[] = [
  {
    path: '/godot/advanced/networking/multiplayer-api',
    element: <MultiplayerAPI />,
  },
  {
    path: '/godot/advanced/networking/rpc-and-sync',
    element: <RPCAndSync />,
  },
];

export default Networking;
