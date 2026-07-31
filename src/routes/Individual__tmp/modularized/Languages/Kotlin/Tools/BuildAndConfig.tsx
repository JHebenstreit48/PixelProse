import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const GradleKotlinDSL = lazy(() => import('@/Pages/MainTabs/Languages/Kotlin/Tools/BuildAndConfig/GradleKotlinDSL'));
const MultiplatformPlugin = lazy(() => import('@/Pages/MainTabs/Languages/Kotlin/Tools/BuildAndConfig/MultiplatformPlugin'));

const BuildAndConfig: RouteObject[] = [
  {
    path: '/kotlin/tools/build-and-config/gradle-kotlin-dsl',
    element: <GradleKotlinDSL />,
  },
  {
    path: '/kotlin/tools/build-and-config/multiplatform-plugin',
    element: <MultiplatformPlugin />,
  },
];

export default BuildAndConfig;
