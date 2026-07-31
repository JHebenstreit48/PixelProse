import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const FileIOBasics = lazy(() => import('@/Pages/MainTabs/Languages/CFamily/C/Advanced/FileOperations/FileIOBasics'));
const WorkingWithFileStreams = lazy(() => import('@/Pages/MainTabs/Languages/CFamily/C/Advanced/FileOperations/WorkingWithFileStreams'));

const FileOperations: RouteObject[] = [
  {
    path: '/cfamily/c/advanced/file-ops/fileio',
    element: <FileIOBasics />,
  },
  {
    path: '/cfamily/c/advanced/file-ops/streams',
    element: <WorkingWithFileStreams />,
  },
];

export default FileOperations;
