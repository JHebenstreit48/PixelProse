import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const ConditionsAndComparisons = lazy(() => import('@/pages/mainTabs/Languages/CFamily/CSharp/Basics/ControlFlow/ConditionsAndComparisons'));
const IfStatements = lazy(() => import('@/pages/mainTabs/Languages/CFamily/CSharp/Basics/ControlFlow/IfStatements'));
const SwitchStatements = lazy(() => import('@/pages/mainTabs/Languages/CFamily/CSharp/Basics/ControlFlow/SwitchStatements'));
const Loops = lazy(() => import('@/pages/mainTabs/Languages/CFamily/CSharp/Basics/ControlFlow/Loops'));

const ControlFlow: RouteObject[] = [
  {
    path: '/languages/c-family/c-sharp/basics/control-flow/conditions-and-comparisons',
    element: <ConditionsAndComparisons />,
  },
  {
    path: '/languages/c-family/c-sharp/basics/control-flow/if-statements',
    element: <IfStatements />,
  },
  {
    path: '/languages/c-family/c-sharp/basics/control-flow/switch-statements',
    element: <SwitchStatements />,
  },
  {
    path: '/languages/c-family/c-sharp/basics/control-flow/loops',
    element: <Loops />,
  }
];

export default ControlFlow;