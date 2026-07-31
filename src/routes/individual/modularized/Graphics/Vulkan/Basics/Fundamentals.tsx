import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Introduction = lazy(() => import('@/pages/mainTabs/Graphics/Vulkan/Basics/Fundamentals/Introduction'));
const SPIRV = lazy(() => import('@/pages/mainTabs/Graphics/Vulkan/Basics/Fundamentals/SPIRV'));

const Fundamentals: RouteObject[] = [
  {
    path: '/vulkan/basics/fundamentals/introduction',
    element: <Introduction />,
  },
  {
    path: '/vulkan/basics/fundamentals/spir-v',
    element: <SPIRV />,
  },
];

export default Fundamentals;
