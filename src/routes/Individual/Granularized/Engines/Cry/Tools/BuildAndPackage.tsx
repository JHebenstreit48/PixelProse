import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const BuildAndPackage = lazy(() => import('@/Pages/MainTabs/Engines/Cry/Tools/BuildAndPackage/BuildAndPackage'));
const PlatformsAndTargets = lazy(() => import('@/Pages/MainTabs/Engines/Cry/Tools/BuildAndPackage/PlatformsAndTargets'));

const BuildAndPackage: RouteObject[] = [
  {
    path: '/cry/tools/build-and-package/build-and-package',
    element: <BuildAndPackage />,
  },
  {
    path: '/cry/tools/build-and-package/platforms-and-targets',
    element: <PlatformsAndTargets />,
  },
];

export default BuildAndPackage;
