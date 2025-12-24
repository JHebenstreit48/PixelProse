import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const StandardLibrary = lazy(() => import('@/Pages/MainTabs/Languages/CFamily/C/Tools/CoreLibraries/StandardLibrary'));
const PopularLibraries = lazy(() => import('@/Pages/MainTabs/Languages/CFamily/C/Tools/CoreLibraries/PopularLibraries'));

const CoreLibraries: RouteObject[] = [
  {
    path: '/cfamily/c/tools/core-libraries/stdlib',
    element: <StandardLibrary />,
  },
  {
    path: '/cfamily/c/tools/core-libraries/popularlibs',
    element: <PopularLibraries />,
  },
];

export default CoreLibraries;
