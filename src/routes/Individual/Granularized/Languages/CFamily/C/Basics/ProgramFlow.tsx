import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const ControlFlow = lazy(() => import('@/Pages/MainTabs/Languages/CFamily/C/Basics/ProgramFlow/ControlFlow'));
const Functions = lazy(() => import('@/Pages/MainTabs/Languages/CFamily/C/Basics/ProgramFlow/Functions'));

const ProgramFlow: RouteObject[] = [
  {
    path: '/c-family/c/basics/program-flow/control',
    element: <ControlFlow />,
  },
  {
    path: '/c-family/c/basics/program-flow/functions',
    element: <Functions />,
  }
];

export default ProgramFlow;