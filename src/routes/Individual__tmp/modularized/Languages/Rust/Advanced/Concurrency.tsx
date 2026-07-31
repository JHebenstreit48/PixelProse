import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const AtomicsAndLockFree = lazy(() => import('@/Pages/MainTabs/Languages/Rust/Advanced/Concurrency/AtomicsAndLockFree'));
const AsyncRuntimes = lazy(() => import('@/Pages/MainTabs/Languages/Rust/Advanced/Concurrency/AsyncRuntimes'));

const Concurrency: RouteObject[] = [
  {
    path: '/rust/advanced/concurrency/atomics-and-lock-free',
    element: <AtomicsAndLockFree />,
  },
  {
    path: '/rust/advanced/concurrency/async-runtimes',
    element: <AsyncRuntimes />,
  },
];

export default Concurrency;
