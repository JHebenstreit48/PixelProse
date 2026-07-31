import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Introduction = lazy(() => import('@/pages/mainTabs/Engines/Unity/Basics/Fundamentals/Introduction'));
const EditorAndLayout = lazy(() => import('@/pages/mainTabs/Engines/Unity/Basics/Fundamentals/EditorAndLayout'));

const Fundamentals: RouteObject[] = [
  {
    path: '/unity/basics/fundamentals/introduction',
    element: <Introduction />,
  },
  {
    path: '/unity/basics/fundamentals/editor-and-layout',
    element: <EditorAndLayout />,
  },
];

export default Fundamentals;
