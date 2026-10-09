import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Console = lazy(() => import('@/pages/mainTabs/Languages/CFamily/CSharp/Basics/CoreConcepts/Console'));
const Operators = lazy(() => import('@/pages/mainTabs/Languages/CFamily/CSharp/Basics/CoreConcepts/Operators'));
// const Arrays = lazy(() => import('@/pages/mainTabs/Languages/CFamily/CSharp/Basics/CoreConcepts/Arrays'));
const Collections = lazy(() => import('@/pages/mainTabs/Languages/CFamily/CSharp/Basics/CoreConcepts/Collections'));
const OOP = lazy(() => import('@/pages/mainTabs/Languages/CFamily/CSharp/Basics/CoreConcepts/OOP'));

const CoreConcepts: RouteObject[] = [
  {
    path: '/languages/c-family/c-sharp/basics/core-concepts/console',
    element: <Console />,
  },
  {
    path: '/languages/c-family/c-sharp/basics/core-concepts/operators',
    element: <Operators />,
  },
  // {
  //   path: '/languages/c-family/c-sharp/basics/core-concepts/arrays',
  //   element: <Arrays />,
  // },
  {
    path: '/languages/c-family/c-sharp/basics/core-concepts/collections',
    element: <Collections />,
  },
  {
    path: '/languages/c-family/c-sharp/basics/core-concepts/oop',
    element: <OOP />,
  },
];

export default CoreConcepts;