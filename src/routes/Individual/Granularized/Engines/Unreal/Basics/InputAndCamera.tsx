import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const InputMapping = lazy(() => import('@/Pages/MainTabs/Engines/Unreal/Basics/InputAndCamera/InputMapping'));
const CameraAndSpringArm = lazy(() => import('@/Pages/MainTabs/Engines/Unreal/Basics/InputAndCamera/CameraAndSpringArm'));

const InputAndCamera: RouteObject[] = [
  {
    path: '/unreal/basics/input-and-camera/input-mapping',
    element: <InputMapping />,
  },
  {
    path: '/unreal/basics/input-and-camera/camera-and-springarm',
    element: <CameraAndSpringArm />,
  },
];

export default InputAndCamera;
