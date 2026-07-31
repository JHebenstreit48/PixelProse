import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Overview = lazy(() => import('@/pages/mainTabs/Languages/Lua/Basics/Fundamentals/Overview'));
const Syntax = lazy(() => import('@/pages/mainTabs/Languages/Lua/Basics/Fundamentals/Syntax'));
const DataTypes = lazy(() => import('@/pages/mainTabs/Languages/Lua/Basics/Fundamentals/DataTypes'));

const Fundamentals: RouteObject[] = [
  {
    path: '/lua/basics/fundamentals/overview',
    element: <Overview />,
  },
  {
    path: '/lua/basics/fundamentals/syntax',
    element: <Syntax />,
  },
  {
    path: '/lua/basics/fundamentals/data-types',
    element: <DataTypes />,
  },
];

export default Fundamentals;
