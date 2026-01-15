import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const MaterialsWorkflow = lazy(() => import('@/Pages/MainTabs/Engines/Unreal/Advanced/MaterialsAndShaders/MaterialsWorkflow'));
const ShaderGraphAndHLSL = lazy(() => import('@/Pages/MainTabs/Engines/Unreal/Advanced/MaterialsAndShaders/ShaderGraphAndHLSL'));

const MaterialsAndShaders: RouteObject[] = [
  {
    path: '/unreal/advanced/materials-and-shaders/materials-workflow',
    element: <MaterialsWorkflow />,
  },
  {
    path: '/unreal/advanced/materials-and-shaders/shader-graph-and-hlsl',
    element: <ShaderGraphAndHLSL />,
  },
];

export default MaterialsAndShaders;
