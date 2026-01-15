import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const ARCBasics = lazy(() => import('@/Pages/MainTabs/Languages/Swift/Basics/MemoryBasics/ARCBasics'));
const ValueSemantics = lazy(() => import('@/Pages/MainTabs/Languages/Swift/Basics/MemoryBasics/ValueSemantics'));

const MemoryBasics: RouteObject[] = [
  {
    path: '/swift/basics/memory-basics/arc-basics',
    element: <ARCBasics />,
  },
  {
    path: '/swift/basics/memory-basics/value-semantics',
    element: <ValueSemantics />,
  },
];

export default MemoryBasics;
