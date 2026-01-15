import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const ECSBasics = lazy(() => import('@/Pages/MainTabs/Engines/Unity/Advanced/DOTSAndJobs/ECSBasics'));
const JobsAndBurst = lazy(() => import('@/Pages/MainTabs/Engines/Unity/Advanced/DOTSAndJobs/JobsAndBurst'));

const DOTSAndJobs: RouteObject[] = [
  {
    path: '/unity/advanced/dots-and-jobs/ecs-basics',
    element: <ECSBasics />,
  },
  {
    path: '/unity/advanced/dots-and-jobs/jobs-and-burst',
    element: <JobsAndBurst />,
  },
];

export default DOTSAndJobs;
