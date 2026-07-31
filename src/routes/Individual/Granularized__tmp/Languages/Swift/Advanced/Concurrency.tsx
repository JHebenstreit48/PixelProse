import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const TaskGroupsAndCancel = lazy(() => import('@/Pages/MainTabs/Languages/Swift/Advanced/Concurrency/TaskGroupsAndCancel'));
const AsyncSequences = lazy(() => import('@/Pages/MainTabs/Languages/Swift/Advanced/Concurrency/AsyncSequences'));

const Concurrency: RouteObject[] = [
  {
    path: '/swift/advanced/concurrency/task-groups-and-cancel',
    element: <TaskGroupsAndCancel />,
  },
  {
    path: '/swift/advanced/concurrency/async-sequences',
    element: <AsyncSequences />,
  },
];

export default Concurrency;
