import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const CustomWidgets = lazy(() => import('@/Pages/MainTabs/Engines/Godot/Advanced/UI/CustomWidgets'));
const ThemesAndStyling = lazy(() => import('@/Pages/MainTabs/Engines/Godot/Advanced/UI/ThemesAndStyling'));

const UI: RouteObject[] = [
  {
    path: '/godot/advanced/ui/custom-widgets',
    element: <CustomWidgets />,
  },
  {
    path: '/godot/advanced/ui/themes-and-styling',
    element: <ThemesAndStyling />,
  },
];

export default UI;
