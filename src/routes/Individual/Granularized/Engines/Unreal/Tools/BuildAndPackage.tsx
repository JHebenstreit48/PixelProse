import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const BuildCookPackage = lazy(() => import('@/Pages/MainTabs/Engines/Unreal/Tools/BuildAndPackage/BuildCookPackage'));
const PlatformsAndTargets = lazy(() => import('@/Pages/MainTabs/Engines/Unreal/Tools/BuildAndPackage/PlatformsAndTargets'));

const BuildAndPackage: RouteObject[] = [
  {
    path: '/unreal/tools/build-and-package/build-cook-package',
    element: <BuildCookPackage />,
  },
  {
    path: '/unreal/tools/build-and-package/platforms-and-targets',
    element: <PlatformsAndTargets />,
  },
];

export default BuildAndPackage;
