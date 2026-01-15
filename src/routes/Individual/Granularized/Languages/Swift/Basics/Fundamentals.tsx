import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Introduction = lazy(() => import('@/Pages/MainTabs/Languages/Swift/Basics/Fundamentals/Introduction'));
const SyntaxAndTypes = lazy(() => import('@/Pages/MainTabs/Languages/Swift/Basics/Fundamentals/SyntaxAndTypes'));

const Fundamentals: RouteObject[] = [
  {
    path: '/swift/basics/fundamentals/introduction',
    element: <Introduction />,
  },
  {
    path: '/swift/basics/fundamentals/syntax-and-types',
    element: <SyntaxAndTypes />,
  },
];

export default Fundamentals;
