import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const PlatformOverview = lazy(() => import('@/pages/mainTabs/Mobile/Platforms/Basics/AndroidFundamentals/PlatformOverview'));
const DeviceFragmentation = lazy(() => import('@/pages/mainTabs/Mobile/Platforms/Basics/AndroidFundamentals/DeviceFragmentation'));
const APKVsAAB = lazy(() => import('@/pages/mainTabs/Mobile/Platforms/Basics/AndroidFundamentals/APKVsAAB'));

const AndroidFundamentals: RouteObject[] = [
  {
    path: '/mobile/platforms/basics/android/overview',
    element: <PlatformOverview />,
  },
  {
    path: '/mobile/platforms/basics/android/fragmentation',
    element: <DeviceFragmentation />,
  },
  {
    path: '/mobile/platforms/basics/android/apk-vs-aab',
    element: <APKVsAAB />,
  },
];

export default AndroidFundamentals;
