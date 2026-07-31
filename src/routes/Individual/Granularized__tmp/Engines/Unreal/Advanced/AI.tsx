import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const BehaviorTrees = lazy(() => import('@/Pages/MainTabs/Engines/Unreal/Advanced/AI/BehaviorTrees'));
const BlackboardAndPerception = lazy(() => import('@/Pages/MainTabs/Engines/Unreal/Advanced/AI/BlackboardAndPerception'));

const AI: RouteObject[] = [
  {
    path: '/unreal/advanced/ai/behavior-trees',
    element: <BehaviorTrees />,
  },
  {
    path: '/unreal/advanced/ai/blackboard-and-perception',
    element: <BlackboardAndPerception />,
  },
];

export default AI;
