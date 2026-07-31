import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const MaterialsAndShaders = lazy(() => import('@/Pages/MainTabs/Engines/Godot/Advanced/Rendering/MaterialsAndShaders'));
const LightingAndPostFX = lazy(() => import('@/Pages/MainTabs/Engines/Godot/Advanced/Rendering/LightingAndPostFX'));

const Rendering: RouteObject[] = [
  {
    path: '/godot/advanced/rendering/materials-and-shaders',
    element: <MaterialsAndShaders />,
  },
  {
    path: '/godot/advanced/rendering/lighting-and-postfx',
    element: <LightingAndPostFX />,
  },
];

export default Rendering;
