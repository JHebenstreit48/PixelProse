import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Replication = lazy(() => import('@/pages/mainTabs/Engines/Cry/Advanced/Networking/Replication'));
const DedicatedServers = lazy(() => import('@/pages/mainTabs/Engines/Cry/Advanced/Networking/DedicatedServers'));

const Networking: RouteObject[] = [
  {
    path: '/cry/advanced/networking/replication',
    element: <Replication />,
  },
  {
    path: '/cry/advanced/networking/dedicated-servers',
    element: <DedicatedServers />,
  },
];

export default Networking;
