import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const FloatingPointGotchas = lazy(() => import('@/Pages/MainTabs/Languages/JavaScript/Basics/MathAndNumbers/FloatingPointGotchas'));
const RNGAndSeeding = lazy(() => import('@/Pages/MainTabs/Languages/JavaScript/Basics/MathAndNumbers/RNGAndSeeding'));

const MathAndNumbers: RouteObject[] = [
  {
    path: '/javascript/game-dev/basics/math-and-numbers/floating-point-gotchas',
    element: <FloatingPointGotchas />,
  },
  {
    path: '/javascript/game-dev/basics/math-and-numbers/rng-and-seeding',
    element: <RNGAndSeeding />,
  },
];

export default MathAndNumbers;
