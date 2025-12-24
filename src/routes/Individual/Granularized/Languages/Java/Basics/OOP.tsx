import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const ClassesAndObjects = lazy(() => import('@/Pages/MainTabs/Languages/Java/Basics/OOP/ClassesAndObjects'));
const InterfacesAndGenerics = lazy(() => import('@/Pages/MainTabs/Languages/Java/Basics/OOP/InterfacesAndGenerics'));

const OOP: RouteObject[] = [
  {
    path: '/java/basics/oop/classes-and-objects',
    element: <ClassesAndObjects />,
  },
  {
    path: '/java/basics/oop/interfaces-and-generics',
    element: <InterfacesAndGenerics />,
  },
];

export default OOP;
