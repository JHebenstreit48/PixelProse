import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const HUDAndMenus = lazy(() => import('@/Pages/MainTabs/Engines/Specialized/Construct/Advanced/UIAndData/HUDAndMenus'));
const SaveLoadAndStorage = lazy(() => import('@/Pages/MainTabs/Engines/Specialized/Construct/Advanced/UIAndData/SaveLoadAndStorage'));

const UIAndData: RouteObject[] = [
  {
    path: '/construct/advanced/ui-and-data/hud-and-menus',
    element: <HUDAndMenus />,
  },
  {
    path: '/construct/advanced/ui-and-data/save-load-and-storage',
    element: <SaveLoadAndStorage />,
  },
];

export default UIAndData;
