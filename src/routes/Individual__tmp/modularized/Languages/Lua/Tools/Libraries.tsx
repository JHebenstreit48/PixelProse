import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const StandardLibrary = lazy(() => import('@/Pages/MainTabs/Languages/Lua/Tools/Libraries/StandardLibrary'));
const PopularLibraries = lazy(() => import('@/Pages/MainTabs/Languages/Lua/Tools/Libraries/PopularLibraries'));

const Libraries: RouteObject[] = [
  {
    path: '/lua/tools/libraries/standard-library',
    element: <StandardLibrary />,
  },
  {
    path: '/lua/tools/libraries/popular-libraries',
    element: <PopularLibraries />,
  },
];

export default Libraries;
