import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const CreateAndConfigure = lazy(() => import('@/Pages/MainTabs/Engines/Specialized/Construct/Basics/ProjectSetup/CreateAndConfigure'));
const AssetsAndFolders = lazy(() => import('@/Pages/MainTabs/Engines/Specialized/Construct/Basics/ProjectSetup/AssetsAndFolders'));

const ProjectSetup: RouteObject[] = [
  {
    path: '/construct/basics/project-setup/create-and-configure',
    element: <CreateAndConfigure />,
  },
  {
    path: '/construct/basics/project-setup/assets-and-folders',
    element: <AssetsAndFolders />,
  },
];

export default ProjectSetup;
