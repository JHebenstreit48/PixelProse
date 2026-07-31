import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const ControlFlow = lazy(() => import('@/pages/mainTabs/Languages/Lua/Basics/FlowAndFunctions/ControlFlow'));
const Functions = lazy(() => import('@/pages/mainTabs/Languages/Lua/Basics/FlowAndFunctions/Functions'));
const IteratorsAndLoops = lazy(() => import('@/pages/mainTabs/Languages/Lua/Basics/FlowAndFunctions/IteratorsAndLoops'));

const FlowAndFunctions: RouteObject[] = [
  {
    path: '/lua/basics/flow-and-functions/control-flow',
    element: <ControlFlow />,
  },
  {
    path: '/lua/basics/flow-and-functions/functions',
    element: <Functions />,
  },
  {
    path: '/lua/basics/flow-and-functions/iterators-and-loops',
    element: <IteratorsAndLoops />,
  },
];

export default FlowAndFunctions;
