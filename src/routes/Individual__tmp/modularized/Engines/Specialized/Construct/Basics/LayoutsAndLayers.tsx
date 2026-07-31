import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const LayoutsAndViews = lazy(() => import('@/Pages/MainTabs/Engines/Specialized/Construct/Basics/LayoutsAndLayers/LayoutsAndViews'));
const LayersAndParallax = lazy(() => import('@/Pages/MainTabs/Engines/Specialized/Construct/Basics/LayoutsAndLayers/LayersAndParallax'));

const LayoutsAndLayers: RouteObject[] = [
  {
    path: '/construct/basics/layouts-and-layers/layouts-and-views',
    element: <LayoutsAndViews />,
  },
  {
    path: '/construct/basics/layouts-and-layers/layers-and-parallax',
    element: <LayersAndParallax />,
  },
];

export default LayoutsAndLayers;
