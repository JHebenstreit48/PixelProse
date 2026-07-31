import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const KMPBasics = lazy(() => import('@/Pages/MainTabs/Languages/Kotlin/Advanced/Multiplatform/KMPBasics'));
const ExpectActual = lazy(() => import('@/Pages/MainTabs/Languages/Kotlin/Advanced/Multiplatform/ExpectActual'));

const Multiplatform: RouteObject[] = [
  {
    path: '/kotlin/advanced/multiplatform/kmp-basics',
    element: <KMPBasics />,
  },
  {
    path: '/kotlin/advanced/multiplatform/expect-actual',
    element: <ExpectActual />,
  },
];

export default Multiplatform;
