import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Introduction = lazy(() => import('@/Pages/MainTabs/Languages/Kotlin/Basics/Fundamentals/Introduction'));
const SyntaxAndTypes = lazy(() => import('@/Pages/MainTabs/Languages/Kotlin/Basics/Fundamentals/SyntaxAndTypes'));

const Fundamentals: RouteObject[] = [
  {
    path: '/kotlin/basics/fundamentals/introduction',
    element: <Introduction />,
  },
  {
    path: '/kotlin/basics/fundamentals/syntax-and-types',
    element: <SyntaxAndTypes />,
  },
];

export default Fundamentals;
