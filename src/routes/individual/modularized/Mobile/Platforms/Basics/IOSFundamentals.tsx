import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const PlatformOverview = lazy(() => import('@/Pages/MainTabs/Mobile/Platforms/Basics/IOSFundamentals/PlatformOverview'));
const DevicesAndOSVersions = lazy(() => import('@/Pages/MainTabs/Mobile/Platforms/Basics/IOSFundamentals/DevicesAndOSVersions'));
const BuildTargetsAndArchitectures = lazy(() => import('@/Pages/MainTabs/Mobile/Platforms/Basics/IOSFundamentals/BuildTargetsAndArchitectures'));

const IOSFundamentals: RouteObject[] = [
  {
    path: '/mobile/platforms/basics/ios/overview',
    element: <PlatformOverview />,
  },
  {
    path: '/mobile/platforms/basics/ios/devices-os',
    element: <DevicesAndOSVersions />,
  },
  {
    path: '/mobile/platforms/basics/ios/targets-architectures',
    element: <BuildTargetsAndArchitectures />,
  },
];

export default IOSFundamentals;
