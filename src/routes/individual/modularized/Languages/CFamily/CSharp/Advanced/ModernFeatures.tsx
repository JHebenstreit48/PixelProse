import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const LINQ = lazy(() => import('@/pages/mainTabs/Languages/CFamily/CSharp/Advanced/ModernFeatures/LINQ'));
const AsynchronousProgramming = lazy(() => import('@/pages/mainTabs/Languages/CFamily/CSharp/Advanced/ModernFeatures/AsynchronousProgramming'));

const ModernFeatures: RouteObject[] = [
  {
    path: '/languages/c-family/c-sharp/advanced/linq',
    element: <LINQ />,
  },
  {
    path: '/languages/c-family/c-sharp/advanced/async',
    element: <AsynchronousProgramming />,
  },
];

export default ModernFeatures;
