import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const FlowGraph = lazy(() => import('@/Pages/MainTabs/Engines/Cry/Basics/Scripting/FlowGraph'));
const GameCodeIntegration = lazy(() => import('@/Pages/MainTabs/Engines/Cry/Basics/Scripting/GameCodeIntegration'));

const Scripting: RouteObject[] = [
  {
    path: '/cry/basics/scripting/flow-graph-visual',
    element: <FlowGraph />,
  },
  {
    path: '/cry/basics/scripting/game-code-integration',
    element: <GameCodeIntegration />,
  },
];

export default Scripting;
