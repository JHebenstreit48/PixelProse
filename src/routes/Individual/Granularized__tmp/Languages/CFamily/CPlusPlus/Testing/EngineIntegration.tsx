import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const IntegrationTestingWithGameEngines = lazy(() => import('@/Pages/MainTabs/Languages/CFamily/CPlusPlus/Testing/EngineIntegration/IntegrationTestingWithGameEngines'));
const UnitTestingInGameEngines = lazy(() => import('@/Pages/MainTabs/Languages/CFamily/CPlusPlus/Testing/EngineIntegration/UnitTestingInGameEngines'));

const EngineIntegration: RouteObject[] = [
  {
    path: '/cplusplus/testing/integration/engines',
    element: <IntegrationTestingWithGameEngines />,
  },
  {
    path: '/cplusplus/testing/integration/unit-testing',
    element: <UnitTestingInGameEngines />,
  },
];

export default EngineIntegration;
