import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const CustomEditorsAndGizmos = lazy(() => import('@/Pages/MainTabs/Engines/Unity/Tools/EditorExtensibility/CustomEditorsAndGizmos'));
const MenusAndWindows = lazy(() => import('@/Pages/MainTabs/Engines/Unity/Tools/EditorExtensibility/MenusAndWindows'));

const EditorExtensibility: RouteObject[] = [
  {
    path: '/unity/tools/editor-extensibility/custom-editors-and-gizmos',
    element: <CustomEditorsAndGizmos />,
  },
  {
    path: '/unity/tools/editor-extensibility/menus-and-windows',
    element: <MenusAndWindows />,
  },
];

export default EditorExtensibility;
