import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const UIOverview = lazy(() => import('@/Pages/MainTabs/Engines/Cry/Basics/UI/UIOverview'));
const ActionsAndEvents = lazy(() => import('@/Pages/MainTabs/Engines/Cry/Basics/UI/ActionsAndEvents'));

const UI: RouteObject[] = [
  {
    path: '/cry/basics/ui/ui-overview',
    element: <UIOverview />,
  },
  {
    path: '/cry/basics/ui/actions-and-events',
    element: <ActionsAndEvents />,
  },
];

export default UI;
