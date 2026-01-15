import { lazy } from 'react';
import { RouteObject } from 'react-router-dom';

const MonoreposAndPaths = lazy(() => import('@/Pages/MainTabs/Languages/TypeScript/Advanced/ProjectScale/MonoreposAndPaths'));
const APISurfacesAndModules = lazy(() => import('@/Pages/MainTabs/Languages/TypeScript/Advanced/ProjectScale/APISurfacesAndModules'));

const ProjectScale: RouteObject[] = [
  {
    path: '/typescript/game-dev/advanced/project-scale/monorepos-and-paths',
    element: <MonoreposAndPaths />,
  },
  {
    path: '/typescript/game-dev/advanced/project-scale/api-surfaces-and-modules',
    element: <APISurfacesAndModules />,
  },
];

export default ProjectScale;
