import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const SetupAndGroups = lazy(() => import('@/Pages/MainTabs/Engines/Unity/Tools/Addressables/SetupAndGroups'));
const BuildAndLoad = lazy(() => import('@/Pages/MainTabs/Engines/Unity/Tools/Addressables/BuildAndLoad'));

const Addressables: RouteObject[] = [
  {
    path: '/unity/tools/addressables/setup-and-groups',
    element: <SetupAndGroups />,
  },
  {
    path: '/unity/tools/addressables/build-and-load',
    element: <BuildAndLoad />,
  },
];

export default Addressables;
