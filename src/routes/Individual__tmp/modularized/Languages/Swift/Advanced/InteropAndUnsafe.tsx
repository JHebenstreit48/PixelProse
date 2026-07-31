import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const CObjCInterop = lazy(() => import('@/Pages/MainTabs/Languages/Swift/Advanced/InteropAndUnsafe/CObjCInterop'));
const UnsafePointers = lazy(() => import('@/Pages/MainTabs/Languages/Swift/Advanced/InteropAndUnsafe/UnsafePointers'));

const InteropAndUnsafe: RouteObject[] = [
  {
    path: '/swift/advanced/interop-and-unsafe/c-and-objc-interop',
    element: <CObjCInterop />,
  },
  {
    path: '/swift/advanced/interop-and-unsafe/unsafe-pointers',
    element: <UnsafePointers />,
  },
];

export default InteropAndUnsafe;
