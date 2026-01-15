import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const KotlinDSLPatterns = lazy(() => import('@/Pages/MainTabs/Languages/Kotlin/Advanced/DSLAndBuilders/KotlinDSLPatterns'));
const TypeSafeBuilders = lazy(() => import('@/Pages/MainTabs/Languages/Kotlin/Advanced/DSLAndBuilders/TypeSafeBuilders'));

const DSLAndBuilders: RouteObject[] = [
  {
    path: '/kotlin/advanced/dsl-and-builders/kotlin-dsl-patterns',
    element: <KotlinDSLPatterns />,
  },
  {
    path: '/kotlin/advanced/dsl-and-builders/type-safe-builders',
    element: <TypeSafeBuilders />,
  },
];

export default DSLAndBuilders;
