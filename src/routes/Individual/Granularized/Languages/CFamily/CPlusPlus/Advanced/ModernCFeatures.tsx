import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Templates = lazy(() => import('@/Pages/MainTabs/Languages/CFamily/CPlusPlus/Advanced/ModernCFeatures/Templates'));
const SmartPointers = lazy(() => import('@/Pages/MainTabs/Languages/CFamily/CPlusPlus/Advanced/ModernCFeatures/SmartPointers'));

const ModernCFeatures: RouteObject[] = [
  {
    path: '/cplusplus/advanced/modern/templates',
    element: <Templates />,
  },
  {
    path: '/cplusplus/advanced/modern/smartpointers',
    element: <SmartPointers />,
  },
];

export default ModernCFeatures;
