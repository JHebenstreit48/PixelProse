import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const EditModeVsPlayMode = lazy(() => import('@/Pages/MainTabs/Engines/Unity/Testing/Basics/EditModeVsPlayMode'));
const InstallAndSetup = lazy(() => import('@/Pages/MainTabs/Engines/Unity/Testing/Basics/InstallAndSetup'));

const Basics: RouteObject[] = [
  {
    path: '/unity/testing/basics/editmode-vs-playmode',
    element: <EditModeVsPlayMode />,
  },
  {
    path: '/unity/testing/basics/install-and-setup',
    element: <InstallAndSetup />,
  },
];

export default Basics;
