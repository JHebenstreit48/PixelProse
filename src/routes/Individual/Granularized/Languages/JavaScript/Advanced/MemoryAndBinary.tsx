import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const ArrayBufferAndDataView = lazy(() => import('@/Pages/MainTabs/Languages/JavaScript/Advanced/MemoryAndBinary/ArrayBufferAndDataView'));
const TypedArraysAndPools = lazy(() => import('@/Pages/MainTabs/Languages/JavaScript/Advanced/MemoryAndBinary/TypedArraysAndPools'));

const MemoryAndBinary: RouteObject[] = [
  {
    path: '/javascript/game-dev/advanced/memory-and-binary/arraybuffer-and-dataview',
    element: <ArrayBufferAndDataView />,
  },
  {
    path: '/javascript/game-dev/advanced/memory-and-binary/typedarrays-and-pools',
    element: <TypedArraysAndPools />,
  },
];

export default MemoryAndBinary;
