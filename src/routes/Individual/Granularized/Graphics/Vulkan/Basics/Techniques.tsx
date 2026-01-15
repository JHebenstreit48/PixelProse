import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const DeferredRendering = lazy(() => import('@/Pages/MainTabs/Graphics/Vulkan/Basics/Techniques/DeferredRendering'));
const DescriptorSets = lazy(() => import('@/Pages/MainTabs/Graphics/Vulkan/Basics/Techniques/DescriptorSets'));

const Techniques: RouteObject[] = [
  {
    path: '/vulkan/basics/techniques/deferred-rendering',
    element: <DeferredRendering />,
  },
  {
    path: '/vulkan/basics/techniques/descriptor-sets',
    element: <DescriptorSets />,
  },
];

export default Techniques;
