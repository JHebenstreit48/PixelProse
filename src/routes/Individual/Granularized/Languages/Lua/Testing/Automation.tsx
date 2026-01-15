import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const AutomationTools = lazy(() => import('@/Pages/MainTabs/Languages/Lua/Testing/Automation/AutomationTools'));
const TestSuites = lazy(() => import('@/Pages/MainTabs/Languages/Lua/Testing/Automation/TestSuites'));

const Automation: RouteObject[] = [
  {
    path: '/lua/testing/automation/automation-tools',
    element: <AutomationTools />,
  },
  {
    path: '/lua/testing/automation/test-suites',
    element: <TestSuites />,
  },
];

export default Automation;
