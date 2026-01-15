import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const BlueprintBasics = lazy(() => import('@/Pages/MainTabs/Engines/Unreal/Basics/Blueprints/BlueprintBasics'));
const BPAndCBridge = lazy(() => import('@/Pages/MainTabs/Engines/Unreal/Basics/Blueprints/BPAndCBridge'));

const Blueprints: RouteObject[] = [
  {
    path: '/unreal/basics/blueprints/blueprint-basics',
    element: <BlueprintBasics />,
  },
  {
    path: '/unreal/basics/blueprints/bp-and-cpp-bridge',
    element: <BPAndCBridge />,
  },
];

export default Blueprints;
