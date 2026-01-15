import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Introduction = lazy(() => import('@/Pages/MainTabs/Engines/Cry/Basics/Fundamentals/Introduction'));
const EditorAndLayout = lazy(() => import('@/Pages/MainTabs/Engines/Cry/Basics/Fundamentals/EditorAndLayout'));

const Fundamentals: RouteObject[] = [
  {
    path: '/cry/basics/fundamentals/introduction',
    element: <Introduction />,
  },
  {
    path: '/cry/basics/fundamentals/editor-and-layout',
    element: <EditorAndLayout />,
  },
];

export default Fundamentals;
