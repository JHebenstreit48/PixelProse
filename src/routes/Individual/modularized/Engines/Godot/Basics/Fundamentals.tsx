import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Introduction = lazy(() => import('@/Pages/MainTabs/Engines/Godot/Basics/Fundamentals/Introduction'));
const EditorAndLayout = lazy(() => import('@/Pages/MainTabs/Engines/Godot/Basics/Fundamentals/EditorAndLayout'));

const Fundamentals: RouteObject[] = [
  {
    path: '/godot/basics/fundamentals/introduction',
    element: <Introduction />,
  },
  {
    path: '/godot/basics/fundamentals/editor-and-layout',
    element: <EditorAndLayout />,
  },
];

export default Fundamentals;
