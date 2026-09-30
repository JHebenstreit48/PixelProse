import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Templates = lazy(() => import('@/pages/mainTabs/Languages/CFamily/CPlusPlus/Advanced/ModernCPlusPlusFeatures/Templates'));
const SmartPointers = lazy(() => import('@/pages/mainTabs/Languages/CFamily/CPlusPlus/Advanced/ModernCPlusPlusFeatures/SmartPointers'));

const ModernCFeatures: RouteObject[] = [
  {
    path: '/languages/c-family/c-plus-plus/advanced/modern/templates',
    element: <Templates />,
  },
  {
    path: '/languages/c-family/c-plus-plus/advanced/modern/smartpointers',
    element: <SmartPointers />,
  },
];

export default ModernCFeatures;
