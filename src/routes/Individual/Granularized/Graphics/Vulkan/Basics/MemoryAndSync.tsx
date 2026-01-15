import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const MemoryManagement = lazy(() => import('@/Pages/MainTabs/Graphics/Vulkan/Basics/MemoryAndSync/MemoryManagement'));
const FencesAndSemaphores = lazy(() => import('@/Pages/MainTabs/Graphics/Vulkan/Basics/MemoryAndSync/FencesAndSemaphores'));

const MemoryAndSync: RouteObject[] = [
  {
    path: '/vulkan/basics/memory-and-sync/memory-management',
    element: <MemoryManagement />,
  },
  {
    path: '/vulkan/basics/memory-and-sync/fences-and-semaphores',
    element: <FencesAndSemaphores />,
  },
];

export default MemoryAndSync;
