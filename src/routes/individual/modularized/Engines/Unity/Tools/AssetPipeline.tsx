import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const ImportSettings = lazy(() => import('@/pages/mainTabs/Engines/Unity/Tools/AssetPipeline/ImportSettings'));
const GUIDsAndMeta = lazy(() => import('@/pages/mainTabs/Engines/Unity/Tools/AssetPipeline/GUIDsAndMeta'));

const AssetPipeline: RouteObject[] = [
  {
    path: '/unity/tools/asset-pipeline/import-settings',
    element: <ImportSettings />,
  },
  {
    path: '/unity/tools/asset-pipeline/guids-and-meta',
    element: <GUIDsAndMeta />,
  },
];

export default AssetPipeline;
