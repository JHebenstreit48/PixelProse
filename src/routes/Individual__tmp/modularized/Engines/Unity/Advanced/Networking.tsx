import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const NetcodeForGameObjects = lazy(() => import('@/Pages/MainTabs/Engines/Unity/Advanced/Networking/NetcodeForGameObjects'));
const RelayAndLobby = lazy(() => import('@/Pages/MainTabs/Engines/Unity/Advanced/Networking/RelayAndLobby'));

const Networking: RouteObject[] = [
  {
    path: '/unity/advanced/networking/netcode-for-gameobjects',
    element: <NetcodeForGameObjects />,
  },
  {
    path: '/unity/advanced/networking/relay-and-lobby',
    element: <RelayAndLobby />,
  },
];

export default Networking;
