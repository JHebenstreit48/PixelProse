import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const AltUnityTester = lazy(() => import('@/Pages/MainTabs/Languages/CFamily/CSharp/Testing/AutomationAndTools/AltUnityTester'));
const GameDriver = lazy(() => import('@/Pages/MainTabs/Languages/CFamily/CSharp/Testing/AutomationAndTools/GameDriver'));

const AutomationAndTools: RouteObject[] = [
  {
    path: '/cfamily/csharp/testing/automation/altunity',
    element: <AltUnityTester />,
  },
  {
    path: '/cfamily/csharp/testing/automation/gamedriver',
    element: <GameDriver />,
  },
];

export default AutomationAndTools;
