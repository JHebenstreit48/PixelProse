import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const FunctionsAndLambdas = lazy(() => import('@/pages/mainTabs/Languages/Kotlin/Basics/FunctionsAndOOP/FunctionsAndLambdas'));
const ClassesAndInheritance = lazy(() => import('@/pages/mainTabs/Languages/Kotlin/Basics/FunctionsAndOOP/ClassesAndInheritance'));

const FunctionsAndOOP: RouteObject[] = [
  {
    path: '/kotlin/basics/functions-and-oop/functions-and-lambdas',
    element: <FunctionsAndLambdas />,
  },
  {
    path: '/kotlin/basics/functions-and-oop/classes-and-inheritance',
    element: <ClassesAndInheritance />,
  },
];

export default FunctionsAndOOP;
