import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const For = lazy(() => import('@/pages/mainTabs/Languages/CFamily/CSharp/Basics/Loops/For'));
const While = lazy(() => import('@/pages/mainTabs/Languages/CFamily/CSharp/Basics/Loops/While'));
const Nested = lazy(() => import('@/pages/mainTabs/Languages/CFamily/CSharp/Basics/Loops/Nested'));
const Foreach = lazy(() => import('@/pages/mainTabs/Languages/CFamily/CSharp/Basics/Loops/Foreach'));

const Loops: RouteObject[] = [
  {
    path: '/languages/c-family/c-sharp/basics/loops/for-loops',
    element: <For />,
  },
  {
    path: '/languages/c-family/c-sharp/basics/loops/while-loops',
    element: <While />,
  },
  {
    path: '/languages/c-family/c-sharp/basics/loops/nested-loops',
    element: <Nested />
  },
  {
    path: '/languages/c-family/c-sharp/basics/loops/foreach-loops',
    element: <Foreach />
  }
];

export default Loops;