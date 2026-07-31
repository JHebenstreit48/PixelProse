import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const DataTypes = lazy(() => import('@/pages/mainTabs/Languages/CFamily/C/Basics/DataHandling/DataTypes'));
const VariablesAndConstants = lazy(() => import('@/pages/mainTabs/Languages/CFamily/C/Basics/DataHandling/VariablesAndConstants'));

const DataHandling: RouteObject[] = [
  {
    path: '/c-family/c/basics/data-handling/data-types',
    element: <DataTypes />,
  },
  {
    path: '/c-family/c/basics/data-handling/variables-and-constants',
    element: <VariablesAndConstants />,
  }
];

export default DataHandling;