import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const JNIBasics = lazy(() => import('@/Pages/MainTabs/Languages/Java/Advanced/InteropAndNative/JNIBasics'));
const ProjectPanama = lazy(() => import('@/Pages/MainTabs/Languages/Java/Advanced/InteropAndNative/ProjectPanama'));

const InteropAndNative: RouteObject[] = [
  {
    path: '/java/advanced/interop-and-native/jni-basics',
    element: <JNIBasics />,
  },
  {
    path: '/java/advanced/interop-and-native/project-panama-ffi',
    element: <ProjectPanama />,
  },
];

export default InteropAndNative;
