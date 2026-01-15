import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const PackagesAndManifests = lazy(() => import('@/Pages/MainTabs/Engines/Unity/Tools/PackageManager/PackagesAndManifests'));
const EditorVersionsAndLTS = lazy(() => import('@/Pages/MainTabs/Engines/Unity/Tools/PackageManager/EditorVersionsAndLTS'));

const PackageManager: RouteObject[] = [
  {
    path: '/unity/tools/package-manager/packages-and-manifests',
    element: <PackagesAndManifests />,
  },
  {
    path: '/unity/tools/package-manager/editor-versions-and-lts',
    element: <EditorVersionsAndLTS />,
  },
];

export default PackageManager;
