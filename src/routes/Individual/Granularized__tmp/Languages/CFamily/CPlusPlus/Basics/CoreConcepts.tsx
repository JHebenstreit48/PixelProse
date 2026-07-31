import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const OOPConcepts = lazy(() => import('@/Pages/MainTabs/Languages/CFamily/CPlusPlus/Basics/CoreConcepts/OOPConcepts'));
const STLBasics = lazy(() => import('@/Pages/MainTabs/Languages/CFamily/CPlusPlus/Basics/CoreConcepts/STLBasics'));

const CoreConcepts: RouteObject[] = [
  {
    path: '/cplusplus/basics/core/oop',
    element: <OOPConcepts />,
  },
  {
    path: '/cplusplus/basics/core/stl',
    element: <STLBasics />,
  },
];

export default CoreConcepts;
