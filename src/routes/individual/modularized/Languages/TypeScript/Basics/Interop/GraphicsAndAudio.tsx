import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const WebGLWebAudioTypes = lazy(() => import('@/pages/mainTabs/Languages/TypeScript/Basics/Interop/GraphicsAndAudio/WebGLWebAudioTypes'));
const CanvasWebGPUTypes = lazy(() => import('@/pages/mainTabs/Languages/TypeScript/Basics/Interop/GraphicsAndAudio/CanvasWebGPUTypes'));

const GraphicsAndAudio: RouteObject[] = [
  {
    path: '/typescript/game-dev/basics/interop/graphics-and-audio/webgl-webaudio-types',
    element: <WebGLWebAudioTypes />,
  },
  {
    path: '/typescript/game-dev/basics/interop/graphics-and-audio/canvas-webgpu-types',
    element: <CanvasWebGPUTypes />,
  },
];

export default GraphicsAndAudio;
