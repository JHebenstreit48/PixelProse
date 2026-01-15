import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Introduction = lazy(() => import('@/Pages/MainTabs/Languages/Rust/Basics/Fundamentals/Introduction'));
const SyntaxAndTypes = lazy(() => import('@/Pages/MainTabs/Languages/Rust/Basics/Fundamentals/SyntaxAndTypes'));

const Fundamentals: RouteObject[] = [
  {
    path: '/rust/basics/fundamentals/introduction',
    element: <Introduction />,
  },
  {
    path: '/rust/basics/fundamentals/syntax-and-types',
    element: <SyntaxAndTypes />,
  },
];

export default Fundamentals;
