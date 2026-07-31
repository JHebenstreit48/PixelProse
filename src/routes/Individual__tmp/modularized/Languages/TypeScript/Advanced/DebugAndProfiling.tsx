import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const TypePerfDiagnostics = lazy(() => import('@/Pages/MainTabs/Languages/TypeScript/Advanced/DebugAndProfiling/TypePerfDiagnostics'));
const BuildOutputAndDecls = lazy(() => import('@/Pages/MainTabs/Languages/TypeScript/Advanced/DebugAndProfiling/BuildOutputAndDecls'));

const DebugAndProfiling: RouteObject[] = [
  {
    path: '/typescript/game-dev/advanced/debug-and-profiling/type-perf-diagnostics',
    element: <TypePerfDiagnostics />,
  },
  {
    path: '/typescript/game-dev/advanced/debug-and-profiling/build-output-and-decls',
    element: <BuildOutputAndDecls />,
  },
];

export default DebugAndProfiling;
