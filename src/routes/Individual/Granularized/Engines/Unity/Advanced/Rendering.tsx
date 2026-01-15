import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const URPHDRPAndBuiltIn = lazy(() => import('@/Pages/MainTabs/Engines/Unity/Advanced/Rendering/URPHDRPAndBuiltIn'));
const MaterialsAndShaders = lazy(() => import('@/Pages/MainTabs/Engines/Unity/Advanced/Rendering/MaterialsAndShaders'));

const Rendering: RouteObject[] = [
  {
    path: '/unity/advanced/rendering/urp-hdrp-and-built-in',
    element: <URPHDRPAndBuiltIn />,
  },
  {
    path: '/unity/advanced/rendering/materials-and-shaders',
    element: <MaterialsAndShaders />,
  },
];

export default Rendering;
