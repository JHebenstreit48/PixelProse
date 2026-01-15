import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const LifecycleAndMonoBehaviours = lazy(() => import('@/Pages/MainTabs/Engines/Unity/Basics/Scripting/LifecycleAndMonoBehaviours'));
const ScriptableObjects = lazy(() => import('@/Pages/MainTabs/Engines/Unity/Basics/Scripting/ScriptableObjects'));

const Scripting: RouteObject[] = [
  {
    path: '/unity/basics/scripting/lifecycle-and-monobehaviours',
    element: <LifecycleAndMonoBehaviours />,
  },
  {
    path: '/unity/basics/scripting/scriptableobjects',
    element: <ScriptableObjects />,
  },
];

export default Scripting;
