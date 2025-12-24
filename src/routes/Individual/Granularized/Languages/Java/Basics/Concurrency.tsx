import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const ThreadsAndExecutors = lazy(() => import('@/Pages/MainTabs/Languages/Java/Basics/Concurrency/ThreadsAndExecutors'));
const FuturesAndCompletableFuture = lazy(() => import('@/Pages/MainTabs/Languages/Java/Basics/Concurrency/FuturesAndCompletableFuture'));

const Concurrency: RouteObject[] = [
  {
    path: '/java/basics/concurrency-basics/threads-and-executors',
    element: <ThreadsAndExecutors />,
  },
  {
    path: '/java/basics/concurrency-basics/futures-and-completablefuture',
    element: <FuturesAndCompletableFuture />,
  },
];

export default Concurrency;
