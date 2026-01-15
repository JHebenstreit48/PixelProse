import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const VecAndHashMap = lazy(() => import('@/Pages/MainTabs/Languages/Rust/Basics/CollectionsAndIO/VecAndHashMap'));
const FilesAndPaths = lazy(() => import('@/Pages/MainTabs/Languages/Rust/Basics/CollectionsAndIO/FilesAndPaths'));

const CollectionsAndIO: RouteObject[] = [
  {
    path: '/rust/basics/collections-and-io/vec-and-hashmap',
    element: <VecAndHashMap />,
  },
  {
    path: '/rust/basics/collections-and-io/files-and-paths',
    element: <FilesAndPaths />,
  },
];

export default CollectionsAndIO;
