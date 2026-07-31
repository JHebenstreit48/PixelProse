import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const AssetLibAndPlugins = lazy(() => import('@/pages/mainTabs/Engines/Godot/Tools/Extensions/AssetLibAndPlugins'));
const GDExtensionSetup = lazy(() => import('@/pages/mainTabs/Engines/Godot/Tools/Extensions/GDExtensionSetup'));

const Extensions: RouteObject[] = [
  {
    path: '/godot/tools/extensions/assetlib-and-plugins',
    element: <AssetLibAndPlugins />,
  },
  {
    path: '/godot/tools/extensions/gdextension-setup',
    element: <GDExtensionSetup />,
  },
];

export default Extensions;
