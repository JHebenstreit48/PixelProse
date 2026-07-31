import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const MetricsAndScale = lazy(() => import('@/pages/mainTabs/Design/Levels/Basics/LayoutAndBlocking/MetricsAndScale'));
const Grayboxing = lazy(() => import('@/pages/mainTabs/Design/Levels/Basics/LayoutAndBlocking/Grayboxing'));

const LayoutAndBlocking: RouteObject[] = [
  {
    path: '/gamedesign/levels/basics/layout-and-blocking/metrics-and-scale',
    element: <MetricsAndScale />,
  },
  {
    path: '/gamedesign/levels/basics/layout-and-blocking/grayboxing',
    element: <Grayboxing />,
  },
];

export default LayoutAndBlocking;
