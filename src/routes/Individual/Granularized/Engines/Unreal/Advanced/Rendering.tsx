import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const NaniteAndLumen = lazy(() => import('@/Pages/MainTabs/Engines/Unreal/Advanced/Rendering/NaniteAndLumen'));
const PostProcessing = lazy(() => import('@/Pages/MainTabs/Engines/Unreal/Advanced/Rendering/PostProcessing'));

const Rendering: RouteObject[] = [
  {
    path: '/unreal/advanced/rendering/nanite-and-lumen',
    element: <NaniteAndLumen />,
  },
  {
    path: '/unreal/advanced/rendering/post-processing',
    element: <PostProcessing />,
  },
];

export default Rendering;
