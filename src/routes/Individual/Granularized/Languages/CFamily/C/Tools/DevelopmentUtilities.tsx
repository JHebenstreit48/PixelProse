import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const DebuggingTools = lazy(() => import('@/Pages/MainTabs/Languages/CFamily/C/Tools/DevelopmentUtilities/DebuggingTools'));
const EmbeddedSystemsUseCases = lazy(() => import('@/Pages/MainTabs/Languages/CFamily/C/Tools/DevelopmentUtilities/EmbeddedSystemsUseCases'));

const DevelopmentUtilities: RouteObject[] = [
  {
    path: '/cfamily/c/tools/dev-utilities/debugging',
    element: <DebuggingTools />,
  },
  {
    path: '/cfamily/c/tools/dev-utilities/embedded-systems',
    element: <EmbeddedSystemsUseCases />,
  },
];

export default DevelopmentUtilities;
