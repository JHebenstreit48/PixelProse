import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const IntegrationTestingWithGameEngines = lazy(() => import('@/pages/mainTabs/Languages/CFamily/CPlusPlus/Testing/EngineIntegration/IntegrationTestingWithGameEngines'));
const UnitTestingInGameEngines = lazy(() => import('@/pages/mainTabs/Languages/CFamily/CPlusPlus/Testing/EngineIntegration/UnitTestingInGameEngines'));

const EngineIntegration: RouteObject[] = [
  {
    path: '/languages/c-family/c-plus-plus/testing/integration/engines',
    element: <IntegrationTestingWithGameEngines />,
  },
  {
    path: '/languages/c-family/c-plus-plus/testing/integration/unit-testing',
    element: <UnitTestingInGameEngines />,
  },
];

export default EngineIntegration;
