import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const ResourceCompiler = lazy(() => import('@/Pages/MainTabs/Engines/Cry/Tools/AssetPipeline/ResourceCompiler'));
const ImportAndReimport = lazy(() => import('@/Pages/MainTabs/Engines/Cry/Tools/AssetPipeline/ImportAndReimport'));

const AssetPipeline: RouteObject[] = [
  {
    path: '/cry/tools/asset-pipeline/resource-compiler',
    element: <ResourceCompiler />,
  },
  {
    path: '/cry/tools/asset-pipeline/import-and-reimport',
    element: <ImportAndReimport />,
  },
];

export default AssetPipeline;
