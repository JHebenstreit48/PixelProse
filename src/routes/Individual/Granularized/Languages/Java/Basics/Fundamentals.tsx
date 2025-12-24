import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Introduction = lazy(() => import('@/Pages/MainTabs/Languages/Java/Basics/Fundamentals/Introduction'));
const SyntaxAndTypes = lazy(() => import('@/Pages/MainTabs/Languages/Java/Basics/Fundamentals/SyntaxAndTypes'));

const Fundamentals: RouteObject[] = [
  {
    path: '/java/basics/fundamentals/introduction',
    element: <Introduction />,
  },
  {
    path: '/java/basics/fundamentals/syntax-and-types',
    element: <SyntaxAndTypes />,
  },
];

export default Fundamentals;
