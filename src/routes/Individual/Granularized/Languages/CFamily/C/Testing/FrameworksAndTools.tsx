import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const TestingFrameworks = lazy(() => import('@/Pages/MainTabs/Languages/CFamily/C/Testing/FrameworksAndTools/TestingFrameworks'));
const MockingToolsAndTechniques = lazy(() => import('@/Pages/MainTabs/Languages/CFamily/C/Testing/FrameworksAndTools/MockingToolsAndTechniques'));

const FrameworksAndTools: RouteObject[] = [
  {
    path: '/cfamily/c/testing/frameworks/frameworks',
    element: <TestingFrameworks />,
  },
  {
    path: '/cfamily/c/testing/frameworks/mocking-tools',
    element: <MockingToolsAndTechniques />,
  },
];

export default FrameworksAndTools;
