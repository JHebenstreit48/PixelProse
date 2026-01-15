import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const AssertionsAndLatent = lazy(() => import('@/Pages/MainTabs/Engines/Unreal/Testing/Authoring/AssertionsAndLatent'));
const FixturesAndTestWorlds = lazy(() => import('@/Pages/MainTabs/Engines/Unreal/Testing/Authoring/FixturesAndTestWorlds'));

const Authoring: RouteObject[] = [
  {
    path: '/unreal/testing/authoring/assertions-and-latent',
    element: <AssertionsAndLatent />,
  },
  {
    path: '/unreal/testing/authoring/fixtures-and-test-worlds',
    element: <FixturesAndTestWorlds />,
  },
];

export default Authoring;
