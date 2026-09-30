import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const TestingFrameworks = lazy(() => import('@/pages/mainTabs/Languages/CFamily/CPlusPlus/Testing/FrameworksAndTools/TestingFrameworks'));
const MockingTools = lazy(() => import('@/pages/mainTabs/Languages/CFamily/CPlusPlus/Testing/FrameworksAndTools/MockingTools'));

const FrameworksAndTools: RouteObject[] = [
  {
    path: '/languages/c-family/c-plus-plus/testing/frameworks/frameworks',
    element: <TestingFrameworks />,
  },
  {
    path: '/languages/c-family/c-plus-plus/testing/frameworks/mocking',
    element: <MockingTools />,
  },
];

export default FrameworksAndTools;
