import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Introduction = lazy(() => import('@/Pages/MainTabs/Languages/CFamily/CPlusPlus/Basics/Fundamentals/Introduction'));
const SyntaxDifferencesFromC = lazy(() => import('@/Pages/MainTabs/Languages/CFamily/CPlusPlus/Basics/Fundamentals/SyntaxDifferencesFromC'));

const Fundamentals: RouteObject[] = [
  {
    path: '/cplusplus/basics/intro/overview',
    element: <Introduction />,
  },
  {
    path: '/cplusplus/basics/intro/syntaxdiff',
    element: <SyntaxDifferencesFromC />,
  },
];

export default Fundamentals;
