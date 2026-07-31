import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const Introduction = lazy(() => import('@/Pages/MainTabs/Engines/Specialized/Construct/Basics/Fundamentals/Introduction'));
const WorkspaceAndPanels = lazy(() => import('@/Pages/MainTabs/Engines/Specialized/Construct/Basics/Fundamentals/WorkspaceAndPanels'));

const Fundamentals: RouteObject[] = [
  {
    path: '/construct/basics/fundamentals/introduction',
    element: <Introduction />,
  },
  {
    path: '/construct/basics/fundamentals/workspace-and-panels',
    element: <WorkspaceAndPanels />,
  },
];

export default Fundamentals;
