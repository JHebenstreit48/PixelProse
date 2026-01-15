import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const InstanceAndDevice = lazy(() => import('@/Pages/MainTabs/Graphics/Vulkan/Basics/CoreObjects/InstanceAndDevice'));
const QueuesAndCmdBuffers = lazy(() => import('@/Pages/MainTabs/Graphics/Vulkan/Basics/CoreObjects/QueuesAndCmdBuffers'));

const CoreObjects: RouteObject[] = [
  {
    path: '/vulkan/basics/core-objects/instance-and-device',
    element: <InstanceAndDevice />,
  },
  {
    path: '/vulkan/basics/core-objects/queues-and-command-buffers',
    element: <QueuesAndCmdBuffers />,
  },
];

export default CoreObjects;
