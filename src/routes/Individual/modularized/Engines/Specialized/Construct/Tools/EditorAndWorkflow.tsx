import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const ShortcutsAndPanels = lazy(() => import('@/Pages/MainTabs/Engines/Specialized/Construct/Tools/EditorAndWorkflow/ShortcutsAndPanels'));
const TemplatesAndAssetStore = lazy(() => import('@/Pages/MainTabs/Engines/Specialized/Construct/Tools/EditorAndWorkflow/TemplatesAndAssetStore'));

const EditorAndWorkflow: RouteObject[] = [
  {
    path: '/construct/tools/editor-and-workflow/shortcuts-and-panels',
    element: <ShortcutsAndPanels />,
  },
  {
    path: '/construct/tools/editor-and-workflow/templates-and-asset-store',
    element: <TemplatesAndAssetStore />,
  },
];

export default EditorAndWorkflow;
