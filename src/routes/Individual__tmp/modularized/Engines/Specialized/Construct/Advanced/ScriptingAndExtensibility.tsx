import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const JavaScriptAPI = lazy(() => import('@/Pages/MainTabs/Engines/Specialized/Construct/Advanced/ScriptingAndExtensibility/JavaScriptAPI'));
const PluginsAndExtensions = lazy(() => import('@/Pages/MainTabs/Engines/Specialized/Construct/Advanced/ScriptingAndExtensibility/PluginsAndExtensions'));

const ScriptingAndExtensibility: RouteObject[] = [
  {
    path: '/construct/advanced/scripting-and-extensibility/javascript-api',
    element: <JavaScriptAPI />,
  },
  {
    path: '/construct/advanced/scripting-and-extensibility/plugins-and-extensions',
    element: <PluginsAndExtensions />,
  },
];

export default ScriptingAndExtensibility;
