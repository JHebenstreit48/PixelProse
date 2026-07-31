import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const RemotePreview = lazy(() => import('@/pages/mainTabs/Engines/Specialized/Construct/Tools/PreviewAndDebug/RemotePreview'));
const EventDebugger = lazy(() => import('@/pages/mainTabs/Engines/Specialized/Construct/Tools/PreviewAndDebug/EventDebugger'));

const PreviewAndDebug: RouteObject[] = [
  {
    path: '/construct/tools/preview-and-debug/remote-preview',
    element: <RemotePreview />,
  },
  {
    path: '/construct/tools/preview-and-debug/event-debugger',
    element: <EventDebugger />,
  },
];

export default PreviewAndDebug;
