import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const JavaInterop = lazy(() => import('@/Pages/MainTabs/Languages/Kotlin/Advanced/Interop/JavaInterop'));
const JNIAndNative = lazy(() => import('@/Pages/MainTabs/Languages/Kotlin/Advanced/Interop/JNIAndNative'));

const Interop: RouteObject[] = [
  {
    path: '/kotlin/advanced/interop/java-interop',
    element: <JavaInterop />,
  },
  {
    path: '/kotlin/advanced/interop/jni-and-native',
    element: <JNIAndNative />,
  },
];

export default Interop;
