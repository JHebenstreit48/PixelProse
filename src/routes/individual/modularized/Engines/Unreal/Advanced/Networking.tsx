import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Replication = lazy(() => import('@/Pages/MainTabs/Engines/Unreal/Advanced/Networking/Replication'));
const DedicatedServers = lazy(() => import('@/Pages/MainTabs/Engines/Unreal/Advanced/Networking/DedicatedServers'));

const Networking: RouteObject[] = [
  {
    path: '/unreal/advanced/networking/replication',
    element: <Replication />,
  },
  {
    path: '/unreal/advanced/networking/dedicated-servers',
    element: <DedicatedServers />,
  },
];

export default Networking;
