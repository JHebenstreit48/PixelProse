import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const JVMMemoryModel = lazy(() => import('@/pages/mainTabs/Languages/Java/Advanced/MemoryAndGC/JVMMemoryModel'));
const GCTuningForGames = lazy(() => import('@/pages/mainTabs/Languages/Java/Advanced/MemoryAndGC/GCTuningForGames'));

const MemoryAndGC: RouteObject[] = [
  {
    path: '/java/advanced/memory-and-gc/jvm-memory-model',
    element: <JVMMemoryModel />,
  },
  {
    path: '/java/advanced/memory-and-gc/gc-tuning-for-games',
    element: <GCTuningForGames />,
  },
];

export default MemoryAndGC;
