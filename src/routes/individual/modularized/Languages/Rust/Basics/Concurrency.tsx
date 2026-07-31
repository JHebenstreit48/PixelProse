import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const ThreadsAndChannels = lazy(() => import('@/Pages/MainTabs/Languages/Rust/Basics/Concurrency/ThreadsAndChannels'));
const Async = lazy(() => import('@/Pages/MainTabs/Languages/Rust/Basics/Concurrency/Async'));

const Concurrency: RouteObject[] = [
  {
    path: '/rust/basics/concurrency-basics/threads-and-channels',
    element: <ThreadsAndChannels />,
  },
  {
    path: '/rust/basics/concurrency-basics/async-intro',
    element: <Async />,
  },
];

export default Concurrency;
