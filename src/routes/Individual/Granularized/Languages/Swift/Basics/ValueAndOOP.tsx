import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const StructsAndEnums = lazy(() => import('@/Pages/MainTabs/Languages/Swift/Basics/ValueAndOOP/StructsAndEnums'));
const ClassesAndInheritance = lazy(() => import('@/Pages/MainTabs/Languages/Swift/Basics/ValueAndOOP/ClassesAndInheritance'));

const ValueAndOOP: RouteObject[] = [
  {
    path: '/swift/basics/value-and-oop/structs-and-enums',
    element: <StructsAndEnums />,
  },
  {
    path: '/swift/basics/value-and-oop/classes-and-inheritance',
    element: <ClassesAndInheritance />,
  },
];

export default ValueAndOOP;
