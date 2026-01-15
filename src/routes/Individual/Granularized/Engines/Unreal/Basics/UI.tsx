import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const UMGBasics = lazy(() => import('@/Pages/MainTabs/Engines/Unreal/Basics/UI/UMGBasics'));
const WidgetBlueprints = lazy(() => import('@/Pages/MainTabs/Engines/Unreal/Basics/UI/WidgetBlueprints'));
const ResponsiveUI = lazy(() => import('@/Pages/MainTabs/Engines/Unreal/Basics/UI/ResponsiveUI'));

const UI: RouteObject[] = [
  {
    path: '/unreal/basics/ui-umg/umg-basics',
    element: <UMGBasics />,
  },
  {
    path: '/unreal/basics/ui-umg/widget-blueprints',
    element: <WidgetBlueprints />,
  },
  {
    path: '/unreal/basics/ui-umg/responsive-ui',
    element: <ResponsiveUI />,
  },
];

export default UI;
