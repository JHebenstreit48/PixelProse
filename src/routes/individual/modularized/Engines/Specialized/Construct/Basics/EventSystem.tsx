import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const EventSheets = lazy(() => import('@/pages/mainTabs/Engines/Specialized/Construct/Basics/EventSystem/EventSheets'));
const ConditionsAndActions = lazy(() => import('@/pages/mainTabs/Engines/Specialized/Construct/Basics/EventSystem/ConditionsAndActions'));

const EventSystem: RouteObject[] = [
  {
    path: '/construct/basics/event-system/event-sheets',
    element: <EventSheets />,
  },
  {
    path: '/construct/basics/event-system/conditions-and-actions',
    element: <ConditionsAndActions />,
  },
];

export default EventSystem;
