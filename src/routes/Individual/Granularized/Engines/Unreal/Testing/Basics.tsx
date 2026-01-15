import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const FunctionalVsAutomation = lazy(() => import('@/Pages/MainTabs/Engines/Unreal/Testing/Basics/FunctionalVsAutomation'));
const SetupAndRunner = lazy(() => import('@/Pages/MainTabs/Engines/Unreal/Testing/Basics/SetupAndRunner'));

const Basics: RouteObject[] = [
  {
    path: '/unreal/testing/basics/functional-vs-automation',
    element: <FunctionalVsAutomation />,
  },
  {
    path: '/unreal/testing/basics/setup-and-runner',
    element: <SetupAndRunner />,
  },
];

export default Basics;
