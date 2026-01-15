import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const TestingFrameworks = lazy(() => import('@/Pages/MainTabs/Languages/CFamily/CPlusPlus/Testing/FrameworksAndTools/TestingFrameworks'));
const MockingTools = lazy(() => import('@/Pages/MainTabs/Languages/CFamily/CPlusPlus/Testing/FrameworksAndTools/MockingTools'));

const FrameworksAndTools: RouteObject[] = [
  {
    path: '/cplusplus/testing/frameworks/frameworks',
    element: <TestingFrameworks />,
  },
  {
    path: '/cplusplus/testing/frameworks/mocking',
    element: <MockingTools />,
  },
];

export default FrameworksAndTools;
