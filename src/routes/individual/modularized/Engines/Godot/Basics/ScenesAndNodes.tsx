import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const NodeSystem = lazy(() => import('@/Pages/MainTabs/Engines/Godot/Basics/ScenesAndNodes/NodeSystem'));
const SignalsAndEvents = lazy(() => import('@/Pages/MainTabs/Engines/Godot/Basics/ScenesAndNodes/SignalsAndEvents'));

const ScenesAndNodes: RouteObject[] = [
  {
    path: '/godot/basics/scenes-and-nodes/node-system',
    element: <NodeSystem />,
  },
  {
    path: '/godot/basics/scenes-and-nodes/signals-and-events',
    element: <SignalsAndEvents />,
  },
];

export default ScenesAndNodes;
