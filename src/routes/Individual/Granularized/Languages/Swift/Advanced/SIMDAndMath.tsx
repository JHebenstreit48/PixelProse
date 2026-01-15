import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const SIMDBasics = lazy(() => import('@/Pages/MainTabs/Languages/Swift/Advanced/SIMDAndMath/SIMDBasics'));
const NumericPerformance = lazy(() => import('@/Pages/MainTabs/Languages/Swift/Advanced/SIMDAndMath/NumericPerformance'));

const SIMDAndMath: RouteObject[] = [
  {
    path: '/swift/advanced/simd-and-math/simd-basics',
    element: <SIMDBasics />,
  },
  {
    path: '/swift/advanced/simd-and-math/numeric-performance',
    element: <NumericPerformance />,
  },
];

export default SIMDAndMath;
