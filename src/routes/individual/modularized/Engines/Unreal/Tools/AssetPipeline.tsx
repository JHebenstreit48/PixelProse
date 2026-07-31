import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const ImportAndReimport = lazy(() => import('@/pages/mainTabs/Engines/Unreal/Tools/AssetPipeline/ImportAndReimport'));
const DataTablesAndLocalization = lazy(() => import('@/pages/mainTabs/Engines/Unreal/Tools/AssetPipeline/DataTablesAndLocalization'));

const AssetPipeline: RouteObject[] = [
  {
    path: '/unreal/tools/asset-pipeline/import-and-reimport',
    element: <ImportAndReimport />,
  },
  {
    path: '/unreal/tools/asset-pipeline/datatables-and-localization',
    element: <DataTablesAndLocalization />,
  },
];

export default AssetPipeline;
