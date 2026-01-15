import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const InputSystem = lazy(() => import('@/Pages/MainTabs/Engines/Unity/Basics/InputAndCamera/InputSystem'));
const CameraAndCinemachine = lazy(() => import('@/Pages/MainTabs/Engines/Unity/Basics/InputAndCamera/CameraAndCinemachine'));

const InputAndCamera: RouteObject[] = [
  {
    path: '/unity/basics/input-and-camera/input-system',
    element: <InputSystem />,
  },
  {
    path: '/unity/basics/input-and-camera/camera-and-cinemachine',
    element: <CameraAndCinemachine />,
  },
];

export default InputAndCamera;
