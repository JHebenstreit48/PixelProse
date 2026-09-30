import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const UnityTestFramework = lazy(() => import('@/pages/mainTabs/Languages/CFamily/CSharp/Testing/Frameworks/UnityTestFramework'));
const XUnit = lazy(() => import('@/pages/mainTabs/Languages/CFamily/CSharp/Testing/Frameworks/XUnit'));
const SpecFlow = lazy(() => import('@/pages/mainTabs/Languages/CFamily/CSharp/Testing/Frameworks/SpecFlow'));

const Frameworks: RouteObject[] = [
  {
    path: '/languages/c-family/c-sharp/testing/frameworks/unity-test-framework',
    element: <UnityTestFramework />,
  },
  {
    path: '/languages/c-family/c-sharp/testing/frameworks/xunit',
    element: <XUnit />,
  },
  {
    path: '/languages/c-family/c-sharp/testing/frameworks/specflow',
    element: <SpecFlow />,
  },
];

export default Frameworks;
