import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const CreateAndConfigure = lazy(() => import('@/pages/mainTabs/Engines/Specialized/Construct/Basics/ProjectSetup/CreateAndConfigure'));
const AssetsAndFolders = lazy(() => import('@/pages/mainTabs/Engines/Specialized/Construct/Basics/ProjectSetup/AssetsAndFolders'));

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
