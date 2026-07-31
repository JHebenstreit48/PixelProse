import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Materials = lazy(() => import('@/Pages/MainTabs/Engines/Cry/Basics/RenderingBasics/Materials'));
const Lighting = lazy(() => import('@/Pages/MainTabs/Engines/Cry/Basics/RenderingBasics/Lighting'));

const RenderingBasics: RouteObject[] = [
  {
    path: '/cry/basics/rendering-basics/materials',
    element: <Materials />,
  },
  {
    path: '/cry/basics/rendering-basics/lighting',
    element: <Lighting />,
  },
];

export default RenderingBasics;
