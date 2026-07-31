import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const UnityTestFramework = lazy(() => import('@/Pages/MainTabs/Languages/CFamily/CSharp/Testing/Frameworks/UnityTestFramework'));
const XUnit = lazy(() => import('@/Pages/MainTabs/Languages/CFamily/CSharp/Testing/Frameworks/XUnit'));
const SpecFlow = lazy(() => import('@/Pages/MainTabs/Languages/CFamily/CSharp/Testing/Frameworks/SpecFlow'));

const Frameworks: RouteObject[] = [
  {
    path: '/cfamily/csharp/testing/frameworks/unity-test-framework',
    element: <UnityTestFramework />,
  },
  {
    path: '/cfamily/csharp/testing/frameworks/xunit',
    element: <XUnit />,
  },
  {
    path: '/cfamily/csharp/testing/frameworks/specflow',
    element: <SpecFlow />,
  },
];

export default Frameworks;
