import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const CanvasAndLayout = lazy(() => import('@/Pages/MainTabs/Engines/Unity/Basics/UI/CanvasAndLayout'));
const UIElements = lazy(() => import('@/Pages/MainTabs/Engines/Unity/Basics/UI/UIElements'));
const AnimationAndTransitions = lazy(() => import('@/Pages/MainTabs/Engines/Unity/Basics/UI/AnimationAndTransitions'));
const ThemesAndStyling = lazy(() => import('@/Pages/MainTabs/Engines/Unity/Basics/UI/ThemesAndStyling'));

const UI: RouteObject[] = [
  {
    path: '/unity/basics/ui/canvas-and-layout',
    element: <CanvasAndLayout />,
  },
  {
    path: '/unity/basics/ui/ui-elements',
    element: <UIElements />,
  },
  {
    path: '/unity/basics/ui/animation-and-transitions',
    element: <AnimationAndTransitions />,
  },
  {
    path: '/unity/basics/ui/themes-and-styling',
    element: <ThemesAndStyling />,
  },
];

export default UI;
