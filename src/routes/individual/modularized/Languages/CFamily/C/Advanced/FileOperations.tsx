import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const FileIOBasics = lazy(() => import('@/pages/mainTabs/Languages/CFamily/C/Advanced/FileOperations/FileIOBasics'));
const WorkingWithFileStreams = lazy(() => import('@/pages/mainTabs/Languages/CFamily/C/Advanced/FileOperations/WorkingWithFileStreams'));

const FileOperations: RouteObject[] = [
  {
    path: '/languages/c-family/c/advanced/file-ops/fileio',
    element: <FileIOBasics />,
  },
  {
    path: '/languages/c-family/c/advanced/file-ops/streams',
    element: <WorkingWithFileStreams />,
  },
];

export default FileOperations;
