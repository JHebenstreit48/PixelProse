import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const BatchmodeAndCLI = lazy(() => import('@/Pages/MainTabs/Engines/Unity/Testing/CIAndCoverage/BatchmodeAndCLI'));
const CodeCoverage = lazy(() => import('@/Pages/MainTabs/Engines/Unity/Testing/CIAndCoverage/CodeCoverage'));

const CIAndCoverage: RouteObject[] = [
  {
    path: '/unity/testing/ci-and-coverage/batchmode-and-cli',
    element: <BatchmodeAndCLI />,
  },
  {
    path: '/unity/testing/ci-and-coverage/code-coverage',
    element: <CodeCoverage />,
  },
];

export default CIAndCoverage;
