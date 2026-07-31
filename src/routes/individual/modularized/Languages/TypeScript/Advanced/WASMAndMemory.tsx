import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const WASMBindings = lazy(() => import('@/pages/mainTabs/Languages/TypeScript/Advanced/WASMAndMemory/WASMBindings'));
const MemoryViewsAndTypes = lazy(() => import('@/pages/mainTabs/Languages/TypeScript/Advanced/WASMAndMemory/MemoryViewsAndTypes'));

const WASMAndMemory: RouteObject[] = [
  {
    path: '/typescript/game-dev/advanced/wasm-and-memory/wasm-bindings',
    element: <WASMBindings />,
  },
  {
    path: '/typescript/game-dev/advanced/wasm-and-memory/memory-views-and-types',
    element: <MemoryViewsAndTypes />,
  },
];

export default WASMAndMemory;
