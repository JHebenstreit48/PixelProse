import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const ArraysAndDictionaries = lazy(() => import('@/Pages/MainTabs/Languages/Swift/Basics/Collections/ArraysAndDictionaries'));
const SequencesAndIterators = lazy(() => import('@/Pages/MainTabs/Languages/Swift/Basics/Collections/SequencesAndIterators'));

const Collections: RouteObject[] = [
  {
    path: '/swift/basics/collections/arrays-and-dictionaries',
    element: <ArraysAndDictionaries />,
  },
  {
    path: '/swift/basics/collections/sequences-and-iterators',
    element: <SequencesAndIterators />,
  },
];

export default Collections;
