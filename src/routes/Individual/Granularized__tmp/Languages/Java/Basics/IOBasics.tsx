import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const IOVsNIO = lazy(() => import('@/Pages/MainTabs/Languages/Java/Basics/IOBasics/IOVsNIO'));
const FilesAndPaths = lazy(() => import('@/Pages/MainTabs/Languages/Java/Basics/IOBasics/FilesAndPaths'));

const IOBasics: RouteObject[] = [
  {
    path: '/java/basics/io-basics/io-vs-nio',
    element: <IOVsNIO />,
  },
  {
    path: '/java/basics/io-basics/files-and-paths',
    element: <FilesAndPaths />,
  },
];

export default IOBasics;
