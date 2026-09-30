import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const AltUnityTester = lazy(() => import('@/pages/mainTabs/Languages/CFamily/CSharp/Testing/AutomationAndTools/AltUnityTester'));
const GameDriver = lazy(() => import('@/pages/mainTabs/Languages/CFamily/CSharp/Testing/AutomationAndTools/GameDriver'));

const AutomationAndTools: RouteObject[] = [
  {
    path: '/languages/c-family/c-sharp/testing/automation/altunity',
    element: <AltUnityTester />,
  },
  {
    path: '/languages/c-family/c-sharp/testing/automation/gamedriver',
    element: <GameDriver />,
  },
];

export default AutomationAndTools;
