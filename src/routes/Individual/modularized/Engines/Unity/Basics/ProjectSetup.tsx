import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const CreateAndConfigure = lazy(() => import('@/Pages/MainTabs/Engines/Unity/Basics/ProjectSetup/CreateAndConfigure'));
const FoldersAndAssets = lazy(() => import('@/Pages/MainTabs/Engines/Unity/Basics/ProjectSetup/FoldersAndAssets'));

const ProjectSetup: RouteObject[] = [
  {
    path: '/unity/basics/project-setup/create-and-configure',
    element: <CreateAndConfigure />,
  },
  {
    path: '/unity/basics/project-setup/folders-and-assets',
    element: <FoldersAndAssets />,
  },
];

export default ProjectSetup;
