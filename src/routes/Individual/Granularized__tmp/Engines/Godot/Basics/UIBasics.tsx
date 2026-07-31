import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const ControlNodes = lazy(() => import('@/Pages/MainTabs/Engines/Godot/Basics/UIBasics/ControlNodes'));
const LayoutAndAnchors = lazy(() => import('@/Pages/MainTabs/Engines/Godot/Basics/UIBasics/LayoutAndAnchors'));

const UIBasics: RouteObject[] = [
  {
    path: '/godot/basics/ui-basics/control-nodes',
    element: <ControlNodes />,
  },
  {
    path: '/godot/basics/ui-basics/layout-and-anchors',
    element: <LayoutAndAnchors />,
  },
];

export default UIBasics;
