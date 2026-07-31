import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const MemoryManagement = lazy(() => import('@/Pages/MainTabs/Languages/CFamily/C/Advanced/MemoryAndPointers/MemoryManagement'));
const Pointers = lazy(() => import('@/Pages/MainTabs/Languages/CFamily/C/Advanced/MemoryAndPointers/Pointers'));

const MemoryAndPointers: RouteObject[] = [
  {
    path: '/cfamily/c/advanced/memory/memory-management',
    element: <MemoryManagement />,
  },
  {
    path: '/cfamily/c/advanced/memory/pointers',
    element: <Pointers />,
  },
];

export default MemoryAndPointers;
