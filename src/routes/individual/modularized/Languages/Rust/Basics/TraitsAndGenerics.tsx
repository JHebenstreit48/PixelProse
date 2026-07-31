import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Traits = lazy(() => import('@/pages/mainTabs/Languages/Rust/Basics/TraitsAndGenerics/Traits'));
const Generics = lazy(() => import('@/pages/mainTabs/Languages/Rust/Basics/TraitsAndGenerics/Generics'));

const TraitsAndGenerics: RouteObject[] = [
  {
    path: '/rust/basics/traits-and-generics/traits-basics',
    element: <Traits />,
  },
  {
    path: '/rust/basics/traits-and-generics/generics',
    element: <Generics />,
  },
];

export default TraitsAndGenerics;
