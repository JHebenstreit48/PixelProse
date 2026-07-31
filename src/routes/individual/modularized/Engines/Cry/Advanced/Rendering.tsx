import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const RendererAndPipeline = lazy(() => import('@/Pages/MainTabs/Engines/Cry/Advanced/Rendering/RendererAndPipeline'));
const PostProcessing = lazy(() => import('@/Pages/MainTabs/Engines/Cry/Advanced/Rendering/PostProcessing'));

const Rendering: RouteObject[] = [
  {
    path: '/cry/advanced/rendering/renderer-and-pipeline',
    element: <RendererAndPipeline />,
  },
  {
    path: '/cry/advanced/rendering/post-processing',
    element: <PostProcessing />,
  },
];

export default Rendering;
