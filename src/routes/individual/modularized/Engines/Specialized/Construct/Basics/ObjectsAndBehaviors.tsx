import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const SpritesAndInstances = lazy(() => import('@/Pages/MainTabs/Engines/Specialized/Construct/Basics/ObjectsAndBehaviors/SpritesAndInstances'));
const BehaviorsAndInstanceVars = lazy(() => import('@/Pages/MainTabs/Engines/Specialized/Construct/Basics/ObjectsAndBehaviors/BehaviorsAndInstanceVars'));

const ObjectsAndBehaviors: RouteObject[] = [
  {
    path: '/construct/basics/objects-and-behaviors/sprites-and-instances',
    element: <SpritesAndInstances />,
  },
  {
    path: '/construct/basics/objects-and-behaviors/behaviors-and-instance-vars',
    element: <BehaviorsAndInstanceVars />,
  },
];

export default ObjectsAndBehaviors;
