import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const SeededRNGPatterns = lazy(() => import('@/Pages/MainTabs/Languages/JavaScript/Advanced/Determinism/SeededRNGPatterns'));
const FixedStepSimulation = lazy(() => import('@/Pages/MainTabs/Languages/JavaScript/Advanced/Determinism/FixedStepSimulation'));

const Determinism: RouteObject[] = [
  {
    path: '/javascript/game-dev/advanced/determinism/seeded-rng-patterns',
    element: <SeededRNGPatterns />,
  },
  {
    path: '/javascript/game-dev/advanced/determinism/fixed-step-simulation',
    element: <FixedStepSimulation />,
  },
];

export default Determinism;
