import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const GarbageCollection = lazy(() => import('@/Pages/MainTabs/Languages/Lua/Advanced/MemoryAndGC/GarbageCollection'));
const MemoryPatterns = lazy(() => import('@/Pages/MainTabs/Languages/Lua/Advanced/MemoryAndGC/MemoryPatterns'));

const MemoryAndGC: RouteObject[] = [
  {
    path: '/lua/advanced/memory-and-gc/garbage-collection',
    element: <GarbageCollection />,
  },
  {
    path: '/lua/advanced/memory-and-gc/memory-patterns',
    element: <MemoryPatterns />,
  },
];

export default MemoryAndGC;
