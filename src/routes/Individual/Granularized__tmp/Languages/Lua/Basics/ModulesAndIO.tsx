import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const ModulesAndRequire = lazy(() => import('@/Pages/MainTabs/Languages/Lua/Basics/ModulesAndIO/ModulesAndRequire'));
const IOBasics = lazy(() => import('@/Pages/MainTabs/Languages/Lua/Basics/ModulesAndIO/IOBasics'));
const PackagePaths = lazy(() => import('@/Pages/MainTabs/Languages/Lua/Basics/ModulesAndIO/PackagePaths'));

const ModulesAndIO: RouteObject[] = [
  {
    path: '/lua/basics/modules-and-io/modules-and-require',
    element: <ModulesAndRequire />,
  },
  {
    path: '/lua/basics/modules-and-io/io-basics',
    element: <IOBasics />,
  },
  {
    path: '/lua/basics/modules-and-io/package-paths',
    element: <PackagePaths />,
  },
];

export default ModulesAndIO;
