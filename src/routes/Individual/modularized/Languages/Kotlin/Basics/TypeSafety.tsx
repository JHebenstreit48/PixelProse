import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const NullSafety = lazy(() => import('@/Pages/MainTabs/Languages/Kotlin/Basics/TypeSafety/NullSafety'));
const SmartCasts = lazy(() => import('@/Pages/MainTabs/Languages/Kotlin/Basics/TypeSafety/SmartCasts'));

const TypeSafety: RouteObject[] = [
  {
    path: '/kotlin/basics/type-safety/null-safety',
    element: <NullSafety />,
  },
  {
    path: '/kotlin/basics/type-safety/smart-casts',
    element: <SmartCasts />,
  },
];

export default TypeSafety;
