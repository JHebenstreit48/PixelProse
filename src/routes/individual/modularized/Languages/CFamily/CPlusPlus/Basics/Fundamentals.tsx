import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Introduction = lazy(() => import('@/pages/mainTabs/Languages/CFamily/CPlusPlus/Basics/Fundamentals/Introduction'));
const SyntaxDifferencesFromC = lazy(() => import('@/pages/mainTabs/Languages/CFamily/CPlusPlus/Basics/Fundamentals/SyntaxDifferencesFromC'));

const Fundamentals: RouteObject[] = [
  {
    path: '/languages/c-family/c-plus-plus/basics/fundamentals/introduction',
    element: <Introduction />,
  },
  {
    path: '/languages/c-family/c-plus-plus/basics/fundamentals/syntax-differences-from-c',
    element: <SyntaxDifferencesFromC />,
  },
];

export default Fundamentals;
