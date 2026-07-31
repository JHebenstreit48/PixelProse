import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const ARCBasics = lazy(() => import('@/pages/mainTabs/Languages/Swift/Basics/MemoryBasics/ARCBasics'));
const ValueSemantics = lazy(() => import('@/pages/mainTabs/Languages/Swift/Basics/MemoryBasics/ValueSemantics'));

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
