import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const MainStores = lazy(() => import('@/Pages/MainTabs/Mobile/Platforms/Basics/CoreStoreConcepts/MainStores'));
const BasicSubmissionFlow = lazy(() => import('@/Pages/MainTabs/Mobile/Platforms/Basics/CoreStoreConcepts/BasicSubmissionFlow'));

const CoreStoreConcepts: RouteObject[] = [
  {
    path: '/mobile/platforms/basics/stores/main-stores',
    element: <MainStores />,
  },
  {
    path: '/mobile/platforms/basics/stores/submission-flow',
    element: <BasicSubmissionFlow />,
  },
];

export default CoreStoreConcepts;
