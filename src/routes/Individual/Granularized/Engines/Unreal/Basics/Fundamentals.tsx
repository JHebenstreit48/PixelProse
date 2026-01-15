import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Introduction = lazy(() => import('@/Pages/MainTabs/Engines/Unreal/Basics/Fundamentals/Introduction'));
const EditorAndLayout = lazy(() => import('@/Pages/MainTabs/Engines/Unreal/Basics/Fundamentals/EditorAndLayout'));

const Fundamentals: RouteObject[] = [
  {
    path: '/unreal/basics/fundamentals/introduction',
    element: <Introduction />,
  },
  {
    path: '/unreal/basics/fundamentals/editor-and-layout',
    element: <EditorAndLayout />,
  },
];

export default Fundamentals;
