import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const KAPTVsKSP = lazy(() => import('@/Pages/MainTabs/Languages/Kotlin/Tools/CodegenAndSerialization/KAPTVsKSP'));
const KotlinxSerialization = lazy(() => import('@/Pages/MainTabs/Languages/Kotlin/Tools/CodegenAndSerialization/KotlinxSerialization'));

const CodegenAndSerialization: RouteObject[] = [
  {
    path: '/kotlin/tools/codegen-and-serialization/kapt-vs-ksp',
    element: <KAPTVsKSP />,
  },
  {
    path: '/kotlin/tools/codegen-and-serialization/kotlinx-serialization',
    element: <KotlinxSerialization />,
  },
];

export default CodegenAndSerialization;
