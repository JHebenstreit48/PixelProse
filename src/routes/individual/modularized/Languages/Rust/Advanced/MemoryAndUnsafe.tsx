import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const UnsafeRust = lazy(() => import('@/pages/mainTabs/Languages/Rust/Advanced/MemoryAndUnsafe/UnsafeRust'));
const AllocatorsAndArcBox = lazy(() => import('@/pages/mainTabs/Languages/Rust/Advanced/MemoryAndUnsafe/AllocatorsAndArcBox'));

const MemoryAndUnsafe: RouteObject[] = [
  {
    path: '/rust/advanced/memory-and-unsafe/unsafe-rust',
    element: <UnsafeRust />,
  },
  {
    path: '/rust/advanced/memory-and-unsafe/allocators-and-arc-box',
    element: <AllocatorsAndArcBox />,
  },
];

export default MemoryAndUnsafe;
