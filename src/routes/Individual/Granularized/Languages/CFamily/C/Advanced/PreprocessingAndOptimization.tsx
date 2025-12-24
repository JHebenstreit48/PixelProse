import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const MacrosAndPreprocessor = lazy(() => import('@/Pages/MainTabs/Languages/CFamily/C/Advanced/PreprocessingAndOptimization/MacrosAndPreprocessor'));
const RealTimeOptimizations = lazy(() => import('@/Pages/MainTabs/Languages/CFamily/C/Advanced/PreprocessingAndOptimization/RealTimeOptimizations'));

const PreprocessingAndOptimization: RouteObject[] = [
  {
    path: '/cfamily/c/advanced/preprocessing/macros',
    element: <MacrosAndPreprocessor />,
  },
  {
    path: '/cfamily/c/advanced/preprocessing/optimizations',
    element: <RealTimeOptimizations />,
  },
];

export default PreprocessingAndOptimization;
