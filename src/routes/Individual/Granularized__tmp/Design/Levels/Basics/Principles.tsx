import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const ReadabilityAndGuidance = lazy(() => import('@/Pages/MainTabs/Design/Levels/Basics/Principles/ReadabilityAndGuidance'));
const FlowAndPacing = lazy(() => import('@/Pages/MainTabs/Design/Levels/Basics/Principles/FlowAndPacing'));

const Principles: RouteObject[] = [
  {
    path: '/gamedesign/levels/basics/principles/readability-and-guidance',
    element: <ReadabilityAndGuidance />,
  },
  {
    path: '/gamedesign/levels/basics/principles/flow-and-pacing',
    element: <FlowAndPacing />,
  },
];

export default Principles;
