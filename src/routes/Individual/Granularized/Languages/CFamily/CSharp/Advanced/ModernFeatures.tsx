import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const LINQ = lazy(() => import('@/Pages/MainTabs/Languages/CFamily/CSharp/Advanced/ModernFeatures/LINQ'));
const AsynchronousProgramming = lazy(() => import('@/Pages/MainTabs/Languages/CFamily/CSharp/Advanced/ModernFeatures/AsynchronousProgramming'));

const ModernFeatures: RouteObject[] = [
  {
    path: '/cfamily/csharp/advanced/linq',
    element: <LINQ />,
  },
  {
    path: '/cfamily/csharp/advanced/async',
    element: <AsynchronousProgramming />,
  },
];

export default ModernFeatures;
