import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const ExportPresets = lazy(() => import('@/Pages/MainTabs/Engines/Godot/Tools/ExportAndDeploy/ExportPresets'));
const TemplatesAndPlatforms = lazy(() => import('@/Pages/MainTabs/Engines/Godot/Tools/ExportAndDeploy/TemplatesAndPlatforms'));

const ExportAndDeploy: RouteObject[] = [
  {
    path: '/godot/tools/export-and-deploy/export-presets',
    element: <ExportPresets />,
  },
  {
    path: '/godot/tools/export-and-deploy/templates-and-platforms',
    element: <TemplatesAndPlatforms />,
  },
];

export default ExportAndDeploy;
