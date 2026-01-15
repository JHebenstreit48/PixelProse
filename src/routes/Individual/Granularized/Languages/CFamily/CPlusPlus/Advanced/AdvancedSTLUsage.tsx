import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const AdvancedSTLTechniques = lazy(() => import('@/Pages/MainTabs/Languages/CFamily/CPlusPlus/Advanced/AdvancedSTLUsage/AdvancedSTLTechniques'));
const CustomComparatorsAndFunctors = lazy(() => import('@/Pages/MainTabs/Languages/CFamily/CPlusPlus/Advanced/AdvancedSTLUsage/CustomComparatorsAndFunctors'));

const AdvancedSTLUsage: RouteObject[] = [
  {
    path: '/cplusplus/advanced/stl/advanced-stl',
    element: <AdvancedSTLTechniques />,
  },
  {
    path: '/cplusplus/advanced/stl/custom-comparators-functors',
    element: <CustomComparatorsAndFunctors />,
  },
];

export default AdvancedSTLUsage;
