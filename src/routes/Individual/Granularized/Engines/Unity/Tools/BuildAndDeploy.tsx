import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const BuildProfiles = lazy(() => import('@/Pages/MainTabs/Engines/Unity/Tools/BuildAndDeploy/BuildProfiles'));
const CloudBuild = lazy(() => import('@/Pages/MainTabs/Engines/Unity/Tools/BuildAndDeploy/CloudBuild'));

const BuildAndDeploy: RouteObject[] = [
  {
    path: '/unity/tools/build-and-deploy/build-profiles',
    element: <BuildProfiles />,
  },
  {
    path: '/unity/tools/build-and-deploy/cloud-build',
    element: <CloudBuild />,
  },
];

export default BuildAndDeploy;
