import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Vec2Vec3Types = lazy(() => import('@/Pages/MainTabs/Languages/TypeScript/Basics/Types/Math/Vec2Vec3Types'));
const TupleVsClass = lazy(() => import('@/Pages/MainTabs/Languages/TypeScript/Basics/Types/Math/TupleVsClass'));

const Math: RouteObject[] = [
  {
    path: '/typescript/game-dev/basics/types/math/vec2-vec3-types',
    element: <Vec2Vec3Types />,
  },
  {
    path: '/typescript/game-dev/basics/types/math/tuple-vs-class',
    element: <TupleVsClass />,
  },
];

export default Math;
