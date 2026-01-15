import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const BoostLibrary = lazy(() => import('@/Pages/MainTabs/Languages/CFamily/CPlusPlus/Tools/LibrariesAndFrameworks/BoostLibrary'));
const QtFramework = lazy(() => import('@/Pages/MainTabs/Languages/CFamily/CPlusPlus/Tools/LibrariesAndFrameworks/QtFramework'));

const LibrariesAndFrameworks: RouteObject[] = [
  {
    path: '/cplusplus/tools/libs/boost',
    element: <BoostLibrary />,
  },
  {
    path: '/cplusplus/tools/libs/qt',
    element: <QtFramework />,
  },
];

export default LibrariesAndFrameworks;
