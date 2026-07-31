import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const FakesAndSubstitutes = lazy(() => import('@/pages/mainTabs/Engines/Unity/Testing/Isolation/FakesAndSubstitutes'));
const TimeAndRandomness = lazy(() => import('@/pages/mainTabs/Engines/Unity/Testing/Isolation/TimeAndRandomness'));

const Isolation: RouteObject[] = [
  {
    path: '/unity/testing/isolation/fakes-and-substitutes',
    element: <FakesAndSubstitutes />,
  },
  {
    path: '/unity/testing/isolation/time-and-randomness',
    element: <TimeAndRandomness />,
  },
];

export default Isolation;
