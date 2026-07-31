import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const UnitTestingInC = lazy(() => import('@/pages/mainTabs/Languages/CFamily/C/Testing/TestPractices/UnitTestingInC'));
const IntegrationTestingForRealTimeSystems = lazy(() => import('@/pages/mainTabs/Languages/CFamily/C/Testing/TestPractices/IntegrationTestingForRealTimeSystems'));

const TestPractices: RouteObject[] = [
  {
    path: '/cfamily/c/testing/practices/unit-testing',
    element: <UnitTestingInC />,
  },
  {
    path: '/cfamily/c/testing/practices/integration-testing',
    element: <IntegrationTestingForRealTimeSystems />,
  },
];

export default TestPractices;
