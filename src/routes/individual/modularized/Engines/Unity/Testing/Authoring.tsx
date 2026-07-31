import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const AssertionsAndLifecycle = lazy(() => import('@/pages/mainTabs/Engines/Unity/Testing/Authoring/AssertionsAndLifecycle'));
const SceneSetupAndTeardown = lazy(() => import('@/pages/mainTabs/Engines/Unity/Testing/Authoring/SceneSetupAndTeardown'));

const Authoring: RouteObject[] = [
  {
    path: '/unity/testing/authoring/assertions-and-lifecycle',
    element: <AssertionsAndLifecycle />,
  },
  {
    path: '/unity/testing/authoring/scene-setup-and-teardown',
    element: <SceneSetupAndTeardown />,
  },
];

export default Authoring;
