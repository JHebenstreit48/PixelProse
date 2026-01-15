import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Tables = lazy(() => import('@/Pages/MainTabs/Languages/Lua/Basics/DataAndStructures/Tables'));
const StringsAndPatterns = lazy(() => import('@/Pages/MainTabs/Languages/Lua/Basics/DataAndStructures/StringsAndPatterns'));
const NumbersAndMath = lazy(() => import('@/Pages/MainTabs/Languages/Lua/Basics/DataAndStructures/NumbersAndMath'));

const DataAndStructures: RouteObject[] = [
  {
    path: '/lua/basics/data-and-structures/tables',
    element: <Tables />,
  },
  {
    path: '/lua/basics/data-and-structures/strings-and-patterns',
    element: <StringsAndPatterns />,
  },
  {
    path: '/lua/basics/data-and-structures/numbers-and-math',
    element: <NumbersAndMath />,
  },
];

export default DataAndStructures;
