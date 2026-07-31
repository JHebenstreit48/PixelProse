import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const BuildAndPckge = lazy(() => import('@/pages/mainTabs/Engines/Cry/Tools/BuildAndPackage/BuildAndPackage'));
const PlatformsAndTargets = lazy(() => import('@/pages/mainTabs/Engines/Cry/Tools/BuildAndPackage/PlatformsAndTargets'));

const BuildAndPackage: RouteObject[] = [
  {
    path: '/cry/tools/build-and-package/build-and-package',
    element: <BuildAndPckge />,
  },
  {
    path: '/cry/tools/build-and-package/platforms-and-targets',
    element: <PlatformsAndTargets />,
  },
];

export default BuildAndPackage;
