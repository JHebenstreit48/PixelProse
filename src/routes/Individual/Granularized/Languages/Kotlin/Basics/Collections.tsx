import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const CollectionsBasics = lazy(() => import('@/Pages/MainTabs/Languages/Kotlin/Basics/Collections/CollectionsBasics'));
const SequencesAndLazy = lazy(() => import('@/Pages/MainTabs/Languages/Kotlin/Basics/Collections/SequencesAndLazy'));

const Collections: RouteObject[] = [
  {
    path: '/kotlin/basics/collections/collections-basics',
    element: <CollectionsBasics />,
  },
  {
    path: '/kotlin/basics/collections/sequences-and-lazy',
    element: <SequencesAndLazy />,
  },
];

export default Collections;
