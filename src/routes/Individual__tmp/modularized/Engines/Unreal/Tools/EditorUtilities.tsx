import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const EditorUtilityWidgets = lazy(() => import('@/Pages/MainTabs/Engines/Unreal/Tools/EditorUtilities/EditorUtilityWidgets'));
const AutomationAndPython = lazy(() => import('@/Pages/MainTabs/Engines/Unreal/Tools/EditorUtilities/AutomationAndPython'));

const EditorUtilities: RouteObject[] = [
  {
    path: '/unreal/tools/editor-utilities/editor-utility-widgets',
    element: <EditorUtilityWidgets />,
  },
  {
    path: '/unreal/tools/editor-utilities/automation-and-python',
    element: <AutomationAndPython />,
  },
];

export default EditorUtilities;
