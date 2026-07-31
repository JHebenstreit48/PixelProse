import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const CollectionsAndStreams = lazy(() => import('@/Pages/MainTabs/Languages/Java/Basics/Collections/CollectionsAndStreams'));
const OptionalAndNull = lazy(() => import('@/Pages/MainTabs/Languages/Java/Basics/Collections/OptionalAndNull'));

const Collections: RouteObject[] = [
  {
    path: '/java/basics/collections/collections-and-streams',
    element: <CollectionsAndStreams />,
  },
  {
    path: '/java/basics/collections/optional-and-null',
    element: <OptionalAndNull />,
  },
];

export default Collections;
